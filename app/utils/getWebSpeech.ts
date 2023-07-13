import { calculateScore } from "./calculateScore";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export const getWebSpeech = (
  targetText?: string,
  scoreManager?: (scoreString: string) => void
) => {
  let recognizing = false;

  const recognition = new SpeechRecognition();
  recognition.start();

  recognition.continuous = true;
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    recognizing = true;
  };

  recognition.onend = () => {
    recognizing = false;
  };

  console.log({ recognition });

  recognition.onresult = (e: SpeechRecognitionEvent) => {
    console.log(targetText)
    const result = e.results[0][0].transcript
    // TODO(devin): return a score using a callback?
    // - [ ] check how many words were right
    console.log(targetText || "");
    let numCorrect;

    if (scoreManager) {
      const score = calculateScore(targetText, result);
      scoreManager(score)
    }
  };
};
