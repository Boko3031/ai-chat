import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
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
