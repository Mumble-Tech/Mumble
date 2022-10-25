import './scene.scss';

import useKeyPress from '../../hooks/usekeypress';
import { ContentDrawer } from './ContentDrawer/ContentDrawer';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  contentDrawerActive,
  filteredContentState
} from './ContentDrawer/SceneContent/recoil_state';
import { useHotkeys } from 'react-hotkeys-hook';

interface SceneProps {
  sceneName?: string;
  // TODO: Add the content of the scene underneth the scene

  // the structure will be similar to a VDFS https://blog.trailofbits.com/2018/10/12/introduction-to-verifiable-delay-functions-vdfs/
}

export const Scene = (props: SceneProps) => {
  const [active, setActive] = useRecoilState(contentDrawerActive);

  useHotkeys('cmd+l', () => {
    setActive(!active);
  });
  const fPress: boolean = useKeyPress('l');

  let content = useRecoilValue(filteredContentState);
  let contentDrawer = useRecoilValue(contentDrawerActive);

  return (
    <div className="scene">
      <div>h, s, r, f</div>
      {/* <div>{fPress && <ContentDrawer />}</div> */}
      {contentDrawer ? <ContentDrawer /> : <></>}
    </div>
  );
};
