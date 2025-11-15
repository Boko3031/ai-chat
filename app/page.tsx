"use client";
import { ChangeEvent, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Home() {
  const [Input, setInput] = useState({
    role: "",
    character: "",
    content: "",
  });
  const genAI = new GoogleGenerativeAI(
    "AIzaSyB2Re_dW85CES042UKKDvOVmVwDYCGDpec"
  );
  const ai = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const createChat = async () => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        role: Input.role,
        character: Input.character,
        content: Input.content,
      }),
    });
  };
  const handleAi = (e: ChangeEvent<HTMLInputElement>) => {
    // const {role,character,content}=
  };
  return (
    <div>
      <div>hello</div>
      <input
        name="role"
        value={Input.role}
        onChange={(e) => {
          handleAi(e);
        }}
      />
      <input name="character" value={Input.character} />
      <input name="content" value={Input.content} />
    </div>
  );
}
