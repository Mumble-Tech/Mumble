import './scene.scss';

import useKeyPress from '../../hooks/usekeypress';
import { ContentDrawer } from './ContentDrawer/ContentDrawer';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  contentDrawerActive,
  filteredContentState
} from './ContentDrawer/SceneContent/recoil_state';
import { useHotkeys } from 'react-hotkeys-hook';
import { Camera } from './ContentDrawer/SceneContent/SceneList/SceneListChild/Camera';

interface SceneProps {
  sceneName?: string;
  // TODO: Add the content of the scene underneth the scene

  // the structure will be similar to a VDFS https://blog.trailofbits.com/2018/10/12/introduction-to-verifiable-delay-functions-vdfs/
}

export const Scene = (props: SceneProps) => {
  let content = useRecoilValue(filteredContentState);

  return (
    // ! Map the content of the scene drawer to the scene.
    <div className="scene" id="parent-scene">
      {content.map((index, key) => {
        switch (index) {
          case 'Camera':
            return <Camera key={key} />;
          default:
            return <div key={key}></div>;
        }
      })}
    </div>
  );
};
