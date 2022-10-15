// import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { AudioRecorder } from "./components/Recorder";
import { useRecorderPermission } from './hook/useRecorderPermission';


function App() {
  async function record () {
    await invoke("start_recording");
  }

  const startRecord = () => {

  }

  return (
    <>
      <AudioRecorder />
    </>
  );
}

export default App;
