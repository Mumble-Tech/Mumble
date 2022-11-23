import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { contentState, filePreviewState, innerText } from '../../../State/recoil_state';
import './child.scss';

export enum SceneChild {
  POWERPOINT,
  IMAGE,
  TEXT,
  CAMERA
}

interface SceneChildProps {
  name: string;
  content?: Content; // ! Will eventually be a JSON object
  size?: [''];
  type: SceneChild;
  resizable?: boolean;
  key?: any;
}

interface Content {
  width: string;
  height: string;
  backgroundColor: string;
  innerContent?: React.ReactNode;
}

function componentFormat(type: SceneChild): Content {
  const [text, setInnerText]: any = useRecoilState(innerText);
  // all of these items are going to be editable
  switch (type) {
    case SceneChild.POWERPOINT:
      return {
        width: '300px',
        height: '300px',
        backgroundColor: '#ab6441'
      };
    case SceneChild.CAMERA:
      return {
        width: '50px',
        height: '50px',
        backgroundColor: '#4c7555'
      };
    case SceneChild.TEXT:
      return {
        width: '15%',
        height: 'auto',
        backgroundColor: 'transparent',
        innerContent: <p>{text}</p>
      };
    case SceneChild.IMAGE:
      return {
        width: '300px',
        height: '300px',
        backgroundColor: 'transparent'
      };
    default:
      return {
        width: '300px',
        height: '300px',
        backgroundColor: '#ab6441'
      };
  }
}

/**
 *  This Creates The Children for the current Scene.
 */
export const CreateSceneChild = (props: SceneChildProps) => {
  const file: any = useRecoilValue(filePreviewState);
  let content = componentFormat(props.type);
  const [sceneContent, setSceneContent] = useRecoilState(contentState);

  const dragItem: any = useRef();
  const dragOverItem: any = useRef();
  
  const dragStart = (position: any) => {
    dragItem.current = position;
  };

  // when the drag is entred check the context of the item
  const dragEnter = (position: any): void => {
    dragOverItem.current = position;
  };

  /**
   * This resets the list order based on the users drag
   * @param e Event of the Drag
   */
  const setContent = (): void => {
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
    <div
      className="child"
      style={{
        width: `${content.width}`,
        height: `${content.height}`,
        minWidth: `${content.width}`,
        minHeight: `${content.height}`,
        backgroundColor: `${content.backgroundColor}`
      }}
      draggable={true}
      onDragEnter={(position: any) => dragEnter(position)}
      onDragStart={(position: any) => dragStart(position)}
      onDragEnd={() => setContent()}
      key={props.key}
    >
      {content.innerContent}
      {/* Image Preview from Content Drawer */}
      <img src={file} className=".child-preview" />
    </div>
  );
};
