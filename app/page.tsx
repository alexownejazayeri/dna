"use client";

import React from "react";
import Image from "next/image";
import { getWebSpeech } from "./utils/getWebSpeech";

const TopNav = () => {
  return (
    <div className="flex border-solid border-2 mb-8">
      <Image
        src="public/koalit.svg"
        alt="koalit logo"
        width={182}
        height={32}
      />
      <div></div>
      <div>Thing 3</div>
      <div>Thing 4</div>
      <div>Thing 5</div>
    </div>
  );
};

const Koalit = () => {
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
        <div id="speech-controls" className="flex w-full content-between">
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
              getWebSpeech();
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

export default function Home() {
  return (
    <main className="h-screen p-8">
      <div className="flex flex-col h-full ">
        <TopNav />
        <Koalit />
      </div>
    </main>
  );
}
