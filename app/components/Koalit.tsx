import React from "react";
import { Prompt } from "./Prompt";
import { getPrompt } from "../utils/getPrompt";
import { getWebSpeech } from "../utils/getWebSpeech";
import { Score } from "./Score";

export const Koalit = () => {
  const [exercisePrompt, setExercisePrompt] = React.useState(getPrompt());
  const [userInput, setUserInput] = React.useState('')
  let chunks: BlobPart[];
  let mediaRecorder: MediaRecorder;
  const constraints = { audio: true };
  const userMediaIsSupported = Boolean(navigator.mediaDevices.getUserMedia);
 
  if (userMediaIsSupported) {
    console.log("getUserMedia supported.");

    const handleRecordingPermissions = async () => {
      // Request recording access from user
      const stream = await navigator.mediaDevices.getUserMedia(constraints);

      console.log({ stream });

      return new MediaRecorder(stream);
    };
    try {
      const setupMedia = async () => {
        mediaRecorder = await handleRecordingPermissions();
        mediaRecorder.ondataavailable = (e) => {
          chunks.push(e.data);
        };
        console.log({ mediaRecorder });
      };

      setupMedia();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-full border-solid border-2">
      <div className="flex flex-col">
        {userInput && (
          <Score score={userInput} />
        )}
        <Prompt randomPrompt={exercisePrompt} />
        <div id="speech-controls" className="flex w-full justify-center">
          {}
          <button
            className="px-4 py-1 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-500 hover:border-transparent focus:outline-none"
            onClick={() => {
              mediaRecorder.start();
              console.log(mediaRecorder.state);
              console.log("recorder started");
              console.log({ chunks });
            }}
          >
            Record
          </button>
          <button
            className="px-4 py-1 font-semibold rounded-full border border-orange-200 hover:text-white hover:bg-orange-500 hover:border-transparent focus:outline-none"
            onClick={() => {
              getWebSpeech(exercisePrompt, setUserInput);
            }}
          >
            Get Web Speech
          </button>
          <button
            className="px-4 py-1 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-500 hover:border-transparent focus:outline-none"
            onClick={() => {
              mediaRecorder.stop();
              console.log({ chunks });

              const clipName =
                prompt("Enter a name for your soundclip") || "test_clip";

              const clipContainer = document.createElement("article");
              const clipLabel = document.createElement("p");
              const audio = document.createElement("audio");
              const deleteButton = document.createElement("button");

              clipContainer.classList.add("clip");
              audio.setAttribute("controls", "");
              deleteButton.innerHTML = "Delete";
              clipLabel.innerHTML = clipName;

              const blob = new Blob(chunks, {
                type: "audio/mp3; codecs=opus",
              });
              chunks = [];
              const audioURL = window.URL.createObjectURL(blob);
              audio.src = audioURL;

              // Creates link to MP3 blob!
              console.log({ audioURL });
            }}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};
