// import { verifyJwt } from "@/libs/cognito/jwt";

import { putItem } from "@/libs/dynamodb/put-item";

import { headers } from "next/headers";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { id, word, input, lang, roman } = await req.json();

  const sk = `learnuidev@gmail.com#${lang}#${word}`;

  const headersApi = headers();

  const jwtToken = headersApi.get("authorization") || "";
  //   const isVerified = await verifyJwt(jwtToken, { isAdmin: true });
  const isVerified = await true;

  if (isVerified) {
    try {
      const newItem = await putItem({
        TableName: process.env.DYNAMODB_PHRASE_TABLE || "",
        Item: {
          sk,
          id,
          input,
          lang,
          roman,
        },
      });
      return Response.json(newItem);
    } catch (err) {
      console.log("ERROR", err);
      throw new Error("Error");
    }
  } else {
    // return Response.json({
    //   message: "Not authorized",
    // });
    throw new Error("Unauthorized");
  }
}
