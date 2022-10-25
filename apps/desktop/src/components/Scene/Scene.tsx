import './scene.scss';

import useKeyPress from '../../hooks/usekeypress';
import { ContentDrawer } from './ContentDrawer/ContentDrawer';

interface SceneProps {
  sceneName: string;
  content?: Array<React.ReactNode>;
  // TODO: Add the content of the scene underneth the scene

  // the structure will be similar to a VDFS https://blog.trailofbits.com/2018/10/12/introduction-to-verifiable-delay-functions-vdfs/
}

export const Scene = () => {
  const fPress: boolean = useKeyPress('l');

  return (
    <div className="scene">
      <div>h, s, r, f</div>
      {/* <div>{fPress && <ContentDrawer />}</div> */}
      <ContentDrawer />
    </div>
  );
};
