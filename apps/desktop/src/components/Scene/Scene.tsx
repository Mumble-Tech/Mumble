import './scene.scss';

import { useRecoilValue } from 'recoil';
import { filteredContentState } from './State/recoil_state';
import {
  CreateSceneChild,
  SceneChild
} from './ContentDrawer/SceneContent/SceneContentChild/SceneContentChild';
import { AddContentButton } from '../SceneEditor/Buttons/AddContentButton';

interface SceneProps {
  sceneName?: string;
  // TODO: Add the content of the scene underneth the scene

  // the structure will be similar to a VDFS https://blog.trailofbits.com/2018/10/12/introduction-to-verifiable-delay-functions-vdfs/
}

export const Scene = (props: SceneProps) => {
  let content = useRecoilValue(filteredContentState);

  return (
    <div className="scene" id="parent-scene">
      <AddContentButton /> 
      {/* Currently the Scene is built by adding content into a list. */}
      {/* The Scene is going to be displayed as a grid that, when on the editor tab items become editable, and when in the Live view it is not */}
      {content.map((index, key) => {
        switch (index) {
          case 'Camera':
            return <CreateSceneChild name="Camera" type={SceneChild.CAMERA} key={key} />;
          case 'Powerpoint':
            return <CreateSceneChild name="Powerpoint" type={SceneChild.POWERPOINT} key={key} />;
          case 'Image':
            return <CreateSceneChild name="Image" type={SceneChild.IMAGE} key={key} />;
          case 'Text':
            return <CreateSceneChild name="Text" type={SceneChild.TEXT} key={key} />;
          default:
            return <div key={key}></div>;
        }
      })}
    </div>
  );
};
