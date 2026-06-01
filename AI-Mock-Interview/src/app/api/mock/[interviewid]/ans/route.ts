import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      question,
      answer,
      feedback,
      userAnswer,
      mockInterviewId,
      videoUrl,
    } = body;

    console.log("feedback", feedback);
    console.log("userAnswer", userAnswer);
    console.log("mockInterviewId", mockInterviewId);
    console.log("question", question);

    // Validate required fields
    if (
      !question ||
      !feedback ||
      !userAnswer ||
      !mockInterviewId
    ) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    // Get current user
    const user = await currentUser();

    if (!user?.id) {
      return NextResponse.json(
        {
          error: "User not authenticated",
        },
        { status: 401 }
      );
    }

    const userId = user.id;

    // Convert rating string ("4/5", "0/5") => number
    const rating = feedback?.rating
      ? parseInt(feedback.rating.toString().split("/")[0], 10)
      : 0;

    // Check if answer already exists
    const existingAnswer = await db.userAnswer.findFirst({
      where: {
        mockInterviewId: mockInterviewId.toString(),
        question,
      },
    });

    const answerData = {
      Intervieweerating: rating,
      Intervieweefeedback: feedback?.feedback || "",

      voiceTone: feedback?.videoAnalysis?.voiceTone ?? "",
      bodyLanguage: feedback?.videoAnalysis?.bodyLanguage ?? "",
      facialExpressions:
        feedback?.videoAnalysis?.facialExpressions ?? "",
      confidence: feedback?.videoAnalysis?.confidence ?? "",
      speakingPace: feedback?.videoAnalysis?.speakingPace ?? "",
      overallPresentation:
        feedback?.videoAnalysis?.overallPresentation ?? "",
      improvementSuggestions:
        feedback?.videoAnalysis?.improvementSuggestions ?? "",

      videoUrl: videoUrl ?? "",

      userAnswer,

      correctAnswer:
        feedback?.correctAnswer || answer || "",
    };

    if (existingAnswer) {
      await db.userAnswer.update({
        where: {
          id: existingAnswer.id,
        },
        data: answerData,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Answer updated successfully",
        },
        { status: 200 }
      );
    }

    const newAnswer = await db.userAnswer.create({
      data: {
        question,
        userId,
        mockInterviewId: mockInterviewId.toString(),

        ...answerData,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Answer saved successfully",
        data: newAnswer,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Error saving mock interview answer:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
