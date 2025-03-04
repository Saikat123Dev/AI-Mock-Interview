import { AssemblyAI } from "assemblyai";
import { NextRequest, NextResponse } from "next/server";

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLY_AI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("audio");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Invalid file uploaded" }, { status: 400 });
    }

    console.log("Received audio file:", file.name, file.size, file.type);

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    console.log("Uploading to AssemblyAI...");
    const uploadResponse = await client.files.upload(buffer);

    if (!uploadResponse || !uploadResponse.upload_url) {
      console.error("Upload failed, received response:", uploadResponse);
      return NextResponse.json({ error: "Failed to upload file to AssemblyAI" }, { status: 500 });
    }

    console.log("Upload successful, URL:", uploadResponse.upload_url);

    // Request transcription
    console.log("Requesting transcription...");
    const transcription = await client.transcripts.transcribe({
      audio: uploadResponse.upload_url,
    });

    console.log("Transcription requested, ID:", transcription.id);

    // Poll for transcription results
    console.log("Polling for results...");
    let result;
    let status = transcription.status;

    while (status === "processing" || status === "queued") {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds
      result = await client.transcripts.get(transcription.id);
      status = result.status;
      console.log("Current status:", status);

      if (status === "error") {
        console.error("Transcription error:", result.error);
        return NextResponse.json(
          { error: "Transcription failed: " + result.error },
          { status: 500 }
        );
      }
    }

    console.log("Transcription complete:", result.text);

    return NextResponse.json({
      transcript: result.text,
      words: result.words,
      confidence: result.confidence,
    });
  } catch (error) {
    console.error("Transcription error:", error);
    return NextResponse.json(
      { error: "Failed to process audio: " + (error as Error).message },
      { status: 500 }
    );
  }
}
