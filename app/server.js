const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Configure OpenAI API
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY, // Replace with your actual API key
});
const openai = new OpenAIApi(configuration);

// Handle POST request to /transcribe
app.post("/transcribe", (req, res) => {

  const file = req

  openai
    .createTranscription(file.data, "whisper-1")
    .then((response) => {
      const transcription = response.data.text;
      res.json({ transcription });
    })
    .catch((error) => {
      console.error("Error transcribing audio:", error);
      res.status(500).json({ error: "Failed to transcribe audio" });
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


