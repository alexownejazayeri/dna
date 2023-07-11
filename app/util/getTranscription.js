// import file from './Italian.wav'
export const getTranscription = (audio) => {
  const formData = new FormData();
  formData.append("file", audio);

  fetch("http://localhost:3000/transcribe", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      const transcription = data.transcription;
      console.log("Transcription:", transcription);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
