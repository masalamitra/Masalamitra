const express = require("express");
const router = express.Router();
const getChatResponse = require("../services/openai");

router.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    const reply = await getChatResponse(prompt);
    res.json({ reply });
  } catch (err) {
    res.status(500).send("AI Error");
  }
});