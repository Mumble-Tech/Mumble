import './scenelist.scss';

import plus from '../../../../../assets/plus.svg';

interface SceneListProps {
  rootName: string;
  children: React.ReactNode;
  className?: string;
}

export const SceneList = (props: SceneListProps) => {
  return (
    <ul className={`scene-list ${props.className}`}>
      <li className="scene-list--root">
        {props.rootName}
        <img className="scene-list--root--img" src={plus} />
      </li>
      {props.children}
    </ul>
  );
};
