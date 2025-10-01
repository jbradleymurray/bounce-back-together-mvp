import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are a compassionate disaster resource navigator for Florida.
- Ask for ZIP code if missing; infer county when possible.
- Provide verified, general info and next-step guidance.
- No legal/medical advice. Never ask for SSN, bank, or DOB.
- 6th-grade reading level. Step-by-step, short sentences.
If unsure, say so and suggest calling 211 or the county EOC.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json() as {
      messages: { role: "user" | "assistant"; content: string }[];
    };

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const userText = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join("\n");

    const completion = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 400,
      temperature: 0.3,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userText }]
    });

    const reply = completion.content
      .map(c => ("text" in c ? c.text : ""))
      .join("\n")
      .trim();

    return NextResponse.json({ reply });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
