import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { groupId: string } }
) {
  try {
    // Get the current user
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { groupId } = params;
   console.log("groupId", groupId);
    // Verify if the user is part of the interview group
    const interviewGroupUser = await db.interviewGroupUser.findUnique({
      where: {
        userId_groupId: {
          userId: userId,
          groupId: groupId
        }
      }
    });

    if (!interviewGroupUser) {
      return new NextResponse("User not in this interview group", { status: 403 });
    }

    // Get all users in the group with their total scores
    const scores = await db.interviewGroupUser.findMany({
      where: {
        groupId: groupId
      },
      select: {
        userId: true,
        totalScore: true,
        name: true,
        email: true
      },
    });
console.log("scores", scores);
    // Create a map of userId to totalScore for the response
    const scoreMap = scores.reduce((acc, { userId, totalScore, name, email }) => {
      acc[userId] = {
        score: totalScore,
        name: name || email || `User ${userId.substring(0, 5)}`
      };
      return acc;
    }, {});

    return NextResponse.json(scoreMap);
  } catch (error) {
    console.error("[SCORES_FETCH_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
