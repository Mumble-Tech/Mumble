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
import { usePressObserver } from './hooks/usePressObserver';
import { SceneEditor } from './pages/tabs/Editor/SceneEditor';

function App() {
  // setGreetMsg(await invoke("record"));
  const [active, setActive] = useRecoilState(contentDrawerActive);

  useHotkeys('cmd+l', () => {
    setActive(!active);
  });

  let contentDrawer = usePressObserver({ watchKey: 'l' });

  return (
    <div>
      <Footer />
      <div>
        <SceneEditor />
      </div>
      <Titlebar />
      <div>{contentDrawer ? <ContentDrawer className="content-drawer-pos" /> : <></>}</div>
      {/* Why is this upsidedown order is this a tauri thing?? */}
    </div>
  );
}

export default App;
