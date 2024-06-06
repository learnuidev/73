import Image from "next/image";

const words = [
  {
    lang: "en",
    input: "no",
  },
  {
    lang: "en",
    input: "yes",
  },
  {
    lang: "en",
    input: "hello",
  },
  {
    lang: "en",
    input: "bye",
  },
  {
    lang: "en",
    input: "I",
  },
  {
    lang: "en",
    input: "I am",
  },
  {
    lang: "en",
    input: "you are",
  },
  {
    lang: "en",
    input: "what",
  },
  {
    lang: "en",
    input: "is the",
  },
  {
    lang: "en",
    input: "can",
  },
  {
    lang: "en",
    input: "this",
  },
  {
    lang: "en",
    input: "to be",
  },
  {
    lang: "en",
    input: "but",
  },
  {
    lang: "en",
    input: "a",
  },
  {
    lang: "en",
    input: "it",
  },
  {
    lang: "en",
    input: "to",
  },
  {
    lang: "en",
    input: "of",
  },
  {
    lang: "en",
    input: "or",
  },
  {
    lang: "en",
    input: "if",
  },
  {
    lang: "en",
    input: "with",
  },
  {
    lang: "en",
    input: "these",
  },
  {
    lang: "en",
    input: "where",
  },
  {
    lang: "en",
    input: "why",
  },
  {
    lang: "en",
    input: "how",
  },
  {
    lang: "en",
    input: "to do",
  },
  {
    lang: "en",
    input: "there",
  },
  {
    lang: "en",
    input: "as",
  },
  {
    lang: "en",
    input: "his",
  },
  {
    lang: "en",
    input: "that",
  },
  {
    lang: "en",
    input: "he",
  },
  {
    lang: "en",
    input: "on",
  },
  {
    lang: "en",
    input: "they",
  },
  {
    lang: "en",
    input: "at",
  },
  {
    lang: "en",
    input: "to have",
  },
  {
    lang: "en",
    input: "some",
  },
  {
    lang: "en",
    input: "you all",
  },
  {
    lang: "en",
    input: "had",
  },
  {
    lang: "en",
    input: "and",
  },
  {
    lang: "en",
    input: "in",
  },
  {
    lang: "en",
    input: "we",
  },
  {
    lang: "en",
    input: "were",
  },
  {
    lang: "en",
    input: "which",
  },
  {
    lang: "en",
    input: "other",
  },
  {
    lang: "en",
    input: "time",
  },
  {
    lang: "en",
    input: "will",
  },
  {
    lang: "en",
    input: "said",
  },
  {
    lang: "en",
    input: "each",
  },
  {
    lang: "en",
    input: "to want",
  },
  {
    lang: "en",
    input: "good",
  },
  {
    lang: "en",
    input: "bad",
  },
  {
    lang: "en",
    input: "also",
  },
  {
    lang: "en",
    input: "again",
  },
  {
    lang: "en",
    input: "can you how many",
  },
  {
    lang: "en",
    input: "to come",
  },
  {
    lang: "en",
    input: "to know",
  },
  {
    lang: "en",
    input: "sure",
  },
  {
    lang: "en",
    input: "both",
  },
  {
    lang: "en",
    input: "to forget",
  },
  {
    lang: "en",
    input: "half",
  },
  {
    lang: "en",
    input: "until",
  },
  {
    lang: "en",
    input: "except",
  },
  {
    lang: "en",
    input: "definitely",
  },
  {
    lang: "en",
    input: "Sometimes",
  },
  {
    lang: "en",
    input: "wait",
  },
  {
    lang: "en",
    input: "here",
  },
  {
    lang: "en",
    input: "people",
  },
  {
    lang: "en",
    input: "Something",
  },
  {
    lang: "en",
    input: "now",
  },
  {
    lang: "en",
    input: "before",
  },
  {
    lang: "en",
    input: "after day",
  },
  {
    lang: "en",
    input: "week",
  },
  {
    lang: "en",
    input: "month to eat",
  },
  {
    lang: "en",
    input: "all",
  },
];

export default function Home() {
  return (
    <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 p-4 mt-32">
      {words?.map((word) => {
        return (
          <button
            className="transition hover:scale-105 hover:text-white text-gray-400 text-2xl"
            key={word?.input}
          >
            {word?.input}
          </button>
        );
      })}
    </main>
  );
}
