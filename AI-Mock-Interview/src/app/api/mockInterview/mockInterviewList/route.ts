import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    const { userId } = await auth();
    console.log("user:",userId);
    const userid=userId;
    try{
        const fetchAllInterviews=await db.mockInterview.findMany({
            where:{
                userId:userid

            }
        })
        return NextResponse.json(fetchAllInterviews);


    }catch(error:any){
        console.log("error in fetching all Interviews",error.message||error);
        return NextResponse.json(
            {message:"error fetching all interview questions"},
            {status:500}
        );

    }

}
