const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyCi52NMqL4FptIf7z5dI7LeAVrnRFs9lx8";
const genAI = new GoogleGenerativeAI(apiKey);
async function test() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("hello");
    console.log("1.5 flash ok");
  } catch (e) {
    console.error("1.5 flash error:", e.message);
  }
}
test();
