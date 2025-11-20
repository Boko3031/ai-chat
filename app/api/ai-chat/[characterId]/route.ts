import { prisma } from "@/lib/db";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI("api_key");
const ai = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
export const POST = async (
  req: Request,
  context: { params: Promise<{ characterId: string }> }
) => {
  const { characterId } = await context.params;
  const { message } = await req.json();
  const character = await prisma.character.findUnique({
    where: { id: characterId },
  });
  const prompt = [
    {
      role: "user",
      parts: [{ text: `System instruction:\n${character?.SystemPrompt}` }],
    },
    {
      role: "user",
      parts: [{ text: message }],
    },
  ];
  const result = await ai.generateContent({ contents: prompt });
  const reply = result.response.text();
  await prisma.message.createMany({
    data: [
      { role: "user", content: message, characterId },
      { role: "assistant", content: message, characterId },
    ],
  });
  return NextResponse.json({ reply });
};
