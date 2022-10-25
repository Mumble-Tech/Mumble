import './scenecontent.scss';

import { useState, useRef } from 'react';
import { SceneList } from './SceneList/SceneList';

interface SceneContentProps {
  /** Eventually will be shared using something like redux */
  rootSceneName: string;
  /** Content needs to be public information, or global state. */
  content?: Array<React.ReactNode>;
  readonly?: boolean;
}

export const SceneContent = (props: SceneContentProps) => {
  const dragItem: any = useRef();
  const dragOverItem: any = useRef();
  // This will eventually be a list of Objects, with content iside each of the
  // ex:  { name: 'powerpoint', content: 'the powerpoint data' }
  const [sceneContent, setSceneContent] = useState(['Camera', 'Powerpoint', 'Text']);

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };

  // when the drag is entred check the context of the item
  const dragEnter = (e: any, position: any): void => {
    dragOverItem.current = position;
  };

  const setContent = (e: any): void => {
    const copyListItems = [...sceneContent];
    const dragItemContent = copyListItems[dragItem.current];

    // Replace the content with the content of the scene.
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;

    setSceneContent(copyListItems);
  };

  return (
    <SceneList rootName="SceneName">
      {sceneContent &&
        sceneContent.map((item, index) => {
          return (
            <li
              key={index}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={setContent}
              draggable={true}
            >
              {item}
            </li>
          );
        })}
    </SceneList>
  );
};
