import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Scene } from "./components/Scene/Scene";
import { Titlebar } from "./components/Titlebar/Titlebar";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("record"));
  }

  return (  
    <Titlebar />
  );
}

export default App;
