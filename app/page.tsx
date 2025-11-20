"use client";
import { Character } from "@/_component/Character";
import { Chat } from "@/_component/Chat";
import { useState } from "react";

const Home = () => {
  const [Inputvalue, setInputValue] = useState("");

  const createChat = async () => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({  }),
    });
  };

  const SendChat = async () => {
    await fetch("/api/user", {
      method: "GET",
    });
  };

  return (
    <div>
      <Chat />
      <Character />
      <input
        placeholder="ask what you want"
        value={Inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={SendChat}>Send</button>
    </div>
  );
};
export default Home;
