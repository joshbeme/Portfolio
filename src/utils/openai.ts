// utils/openai.ts
import OpenAI from "openai";

const openAIChat = async (prompt: string) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey });

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          'You are genius static site designer. You will be given context on what HTML needs to be output in this format JSON { html: "<your html>" }. Always start with a main tag and end with a main tag.',
      },
      {
        role: "user",
        content: [{ type: "text", text: prompt }],
      },
    ],
    response_format: { type: "json_object" },
  });

  return response.choices[0].message.content;
};

export const openAIChatStream = async (prompt: string) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey });

  const response = await openai.chat.completions.create({
    stream: true,
    model: "gpt-4-turbo",
    messages: [
      {
        role: "system",
        content:
          'You are genius static site designer. You will be given context on what HTML needs to be output in this format JSON { html: "<your html>" }. Always start with a main tag and end with a main tag.',
      },
      {
        role: "user",
        content: [{ type: "text", text: prompt }],
      },
    ],
    response_format: { type: "json_object" },
  });

  return response.toReadableStream();
};

export default openAIChat;
