// /api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * NOTE: Serverless functions are stateless between requests.
 * This file demonstrates an in-memory fallback for short sessions,
 * but it will NOT persist across cold starts or multiple function instances.
 * Use an external store (Redis, FaunaDB, Supabase, etc.) for persistent sessions.
 */

const temporarySessions = {}; // ephemeral only — not reliable in production

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, sessionId } = req.body ?? {};

  if (!message || !sessionId) {
    return res.status(400).json({ error: "Missing message or sessionId" });
  }

  try {
    // Initialize session memory if needed (ephemeral)
    if (!temporarySessions[sessionId]) {
      temporarySessions[sessionId] = [
        { role: "system", content: "You are a helpful AI assistant named Ki Agent." },
      ];
    }

    // Push user message
    temporarySessions[sessionId].push({ role: "user", content: message });

    // Call OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: temporarySessions[sessionId],
    });

    const reply = response.choices?.[0]?.message?.content ?? "No reply from model.";

    // Save assistant reply (ephemeral)
    temporarySessions[sessionId].push({ role: "assistant", content: reply });

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err);
    return res.status(500).json({ error: "OpenAI request failed", details: err.message });
  }
}
