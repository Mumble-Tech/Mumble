
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import { Titlebar } from "./components/Titlebar/Titlebar";

// Scene Information
import { Scene } from "./components/Scene/Scene";
import { Footer } from "./components/Footer/Footer";

function App() {
  // setGreetMsg(await invoke("record"));

  return (  
    <>
    <Footer />
    <div>
      <Scene />
    </div>
    <Titlebar />
    </>
  );
}

export default App;
