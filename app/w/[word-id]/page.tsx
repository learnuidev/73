"use client";

import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams<{ "word-id": string }>();
  const word = params["word-id"];

  const sent = "where is the airport";

  const createWord = async () => {
    const resp = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        id: crypto.randomUUID(),
        word: "where",
        input: sent,
        lang: "en",
        roman: sent,
      }),
    });

    return resp.json();
  };
  return (
    <main className="">
      <h1 className="text-center my-8 text-4xl">{params["word-id"]}</h1>

      <button
        onClick={async () => {
          await createWord();
        }}
      >
        Create yo
      </button>
    </main>
  );
}
