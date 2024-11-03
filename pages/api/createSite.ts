// pages/api/chat.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs, { read } from "fs";
import path from "path";
import websocket from "ws";
import pdf from "pdf-parse";
import openAIChat, { openAIChatStream } from "@src/utils/openai";

const parsePdf = async (filePath: string) => {
  const dataBuffer = fs.readFileSync(filePath);
  try {
    const data = await pdf(dataBuffer);
    return data.text;
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw new Error("Failed to parse PDF");
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pdf = await parsePdf("./Resume.pdf");
  const prompt = `Create a beautiful and modern site based off the information in the PDF supplied and use ALL the information in the pdf. Use modern design principles, that are fun but are proven to intrigue people. Make an interesting and engaging site that makes the resume look like a modern static site displaying important static content. The website shouldn't feel like a resume. Make sure it's never white text on a white background. Use different layouts for every section and engaging pattern for the eyes to look through. Make the background colors darker and the text bright. Adhere to W3C accessibility standards. Add links around popular technology to their technical docs. Give it a fun and retro style using NES.css and Tailwind.css:
  ${pdf}`;

  // const responseStream = await openAIChatStream(prompt);
  // const reader = responseStream.getReader();
  // let result = await reader.read();
  // while (!result.done) {
  //   console.log(result.value);
  //   result = await reader.read();
  // }

  const response = await openAIChat(prompt);

  res.status(200).json({ response });
  try {
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ message: "Failed to fetch response from OpenAI" });
  }
}
