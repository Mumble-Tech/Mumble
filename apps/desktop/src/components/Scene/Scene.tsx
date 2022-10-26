import './scene.scss';

import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredContentState } from './ContentDrawer/SceneContent/recoil_state';
import {
  CreateSceneChild,
  SceneChild
} from './ContentDrawer/SceneContent/SceneContentChild/SceneContentChild';

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
            return <CreateSceneChild name="Camera" type={SceneChild.CAMERA} />;
          case 'Powerpoint':
            return <CreateSceneChild name='Powerpoint' type={SceneChild.POWERPOINT} />;
          default:
            return <div key={key}></div>;
        }
      })}
    </div>
  );
};
