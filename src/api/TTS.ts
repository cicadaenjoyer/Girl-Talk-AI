// const express = require("express");
import express from "express";
import axios from "axios";
// require("dotenv").config();
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.post("/api/generatePodcast", async (req, res) => {
  const { text, voiceId } = req.body;
  try {
    const api = import.meta.env.MURF_API_KEY;
    if (!api) {
      return res.status(500).json({ error: "MURF_API_KEY is not set" });
    }
    const response = await axios.post(
      "https://api.murf.ai/v1/speech/generate",
      { text, voiceId },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          //   "api-key": process.env.MURF_API_KEY,
          "api-key": api,
        },
      }
    );
    res.json({ audioFile: response.data.audioFile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
