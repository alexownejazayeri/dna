import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h1>Voice Input Example</h1>
    <button id="startButton">Start</button>
    <button id="stopButton">Stop</button>
    <p id="output"></p>
    </>
  )
}
