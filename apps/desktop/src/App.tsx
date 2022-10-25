import { invoke } from '@tauri-apps/api/tauri';
import './App.css';

import { Titlebar } from './components/Titlebar/Titlebar';

// Scene Information
import { Scene } from './components/Scene/Scene';
import { Footer } from './components/Footer/Footer';

// State things
import { RecoilRoot } from 'recoil';

function App() {
  // setGreetMsg(await invoke("record"));

  return (
    <RecoilRoot>
      <Footer />
      <div>
        <Scene />
      </div>
      <Titlebar />
    </RecoilRoot>
  );
}

export default App;
