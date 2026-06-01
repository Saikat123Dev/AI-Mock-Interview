import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
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
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          error: "User not authenticated",
        },
        { status: 401 }
      );
    }

    // Convert rating string ("4/5", "0/5") => number
    let parsedRating = feedback?.rating
      ? parseInt(feedback.rating.toString().split("/")[0], 10)
      : 0;

    if (isNaN(parsedRating)) {
      parsedRating = 0;
    }

    const rating = parsedRating;

    // Check if answer already exists
    const existingAnswer = await db.userAnswer.findFirst({
      where: {
        mockInterviewId: mockInterviewId.toString(),
        question,
      },
    });

    const safeString = (val: any) => {
      if (val === null || val === undefined) return "";
      if (typeof val === 'string') return val;
      return JSON.stringify(val);
    };

    const answerData = {
      Intervieweerating: rating,
      Intervieweefeedback: safeString(feedback?.feedback),

      voiceTone: safeString(feedback?.videoAnalysis?.voiceTone),
      bodyLanguage: safeString(feedback?.videoAnalysis?.bodyLanguage),
      facialExpressions: safeString(feedback?.videoAnalysis?.facialExpressions),
      confidence: safeString(feedback?.videoAnalysis?.confidence),
      speakingPace: safeString(feedback?.videoAnalysis?.speakingPace),
      overallPresentation: safeString(feedback?.videoAnalysis?.overallPresentation),
      improvementSuggestions: safeString(feedback?.videoAnalysis?.improvementSuggestions),

      videoUrl: videoUrl ?? "",

      userAnswer,

      correctAnswer: safeString(feedback?.correctAnswer) || answer || "",
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
