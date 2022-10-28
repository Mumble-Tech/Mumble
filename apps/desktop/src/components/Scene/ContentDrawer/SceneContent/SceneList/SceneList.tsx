import './scenelist.scss';

import plus from '../../../../../assets/plus.svg';

interface SceneListProps {
  rootName: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * This is the Content List
 * @param props - This contains the root node
 * @default rootNode - The root of the List or `Scene Name`  */
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
