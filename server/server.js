const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// In-memory session store (optional)
const sessionMessages = {};

app.post("/api/chat", async (req, res) => {
  const { message, sessionId } = req.body;
  if (!message || !sessionId) return res.status(400).json({ error: "Missing message or sessionId" });

  try {
    if (!sessionMessages[sessionId]) {
      sessionMessages[sessionId] = [
        { role: "system", content: "You are a helpful AI assistant named Ki Agent." }
      ];
    }

    sessionMessages[sessionId].push({ role: "user", content: message });

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: sessionMessages[sessionId]
    });

    const reply = response.choices[0].message.content;
    sessionMessages[sessionId].push({ role: "assistant", content: reply });

    res.json({ reply });
  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ error: "OpenAI request failed", details: err.message });
  }
});

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is alive and ready!" });
});

module.exports = app; // ✅ Export for Vercel
