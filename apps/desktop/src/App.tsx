import './App.css';

import { Titlebar } from './components/Titlebar/Titlebar';

// Scene Information
import { Scene } from './components/Scene/Scene';
import { Footer } from './components/Footer/Footer';

// State things
import { useRecoilState, useRecoilValue } from 'recoil';
import { contentDrawerActive } from './components/Scene/State/recoil_state';
import { ContentDrawer } from './components/Scene/ContentDrawer/ContentDrawer';
import { useHotkeys } from 'react-hotkeys-hook';
import { generate } from './api/generate';

function App() {
  // setGreetMsg(await invoke("record"));
  const [active, setActive] = useRecoilState(contentDrawerActive);

  useHotkeys('cmd+l', () => {
    setActive(!active);
  });

  let contentDrawer = useRecoilValue(contentDrawerActive);

  console.log(contentDrawer);

  return (
    <>
      <Footer />
      <div>
        {/* <button className="btn" onClick={generate}>
          Generate
        </button> */}
        <Scene />
      </div>
      <Titlebar />
      {/* <button onClick={generate}>generate powerpoint</button> */}
      <div>{contentDrawer ? <ContentDrawer className="content-drawer-pos" /> : <></>}</div>
    </>
  );
}

export default App;
