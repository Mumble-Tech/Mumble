import './scene.scss';

import useKeyPress from '../../hooks/usekeypress';

export const Scene = () => {
  const happyPress: boolean = useKeyPress('h');
  const sadPress: boolean = useKeyPress('s');
  const robotPress: boolean = useKeyPress('r');
  const foxPress: boolean = useKeyPress('f');

  return (
    <div className="scene">
      <div>h, s, r, f</div>
      <div>
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
        {foxPress && 'content drawer'}
      </div>
    </div>
  );
};
