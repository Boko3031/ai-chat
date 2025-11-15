import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();
  const { content, role, character } = body;
  const response = await prisma.message.create({
    data: {
      content,
      role,
      character,
    },
  });
  return NextResponse.json(response);
};

const genAI = new GoogleGenerativeAI("api_key");
const ai = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
export const GET = async (req: Request, res: Response) => {
  // const characterId=
};
