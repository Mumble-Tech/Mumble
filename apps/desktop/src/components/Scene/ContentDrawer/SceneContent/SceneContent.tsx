import './scenecontent.scss';

import { useRef } from 'react';
import { SceneList } from './SceneList/SceneList';
import { useRecoilState } from 'recoil';
import { contentState, filePreviewState } from '../../State/recoil_state';

interface SceneContentProps {
  /** Eventually will be shared using something like redux */
  rootSceneName: string;
  /** Content needs to be public information, or global state. */
  content?: Array<React.ReactNode>;
  readonly?: boolean;
}

/**
 * The Content of the Current Default Scene.
 *
 */
export const SceneContent = (props: SceneContentProps) => {
  // ! Scene content is going to udpated gloabally, so that the main scene can render the content it wants to.
  const dragItem: any = useRef();
  const dragOverItem: any = useRef();
  // ? This will eventually be a list of Objects, with content iside each of the
  // ?  ex:  { name: 'powerpoint', content: 'the powerpoint data', file: '.pptx : .png : .txt : .pdf ? ext.' }
  const [sceneContent, setSceneContent] = useRecoilState(contentState); // useState(['Camera', 'Powerpoint', 'Text']);
  const [file, setFile] = useRecoilState(filePreviewState);

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };

  // when the drag is entred check the context of the item
  const dragEnter = (e: any, position: any): void => {
    dragOverItem.current = position;
  };

  /**
   * This resets the list order based on the users drag
   * @param e Event of the Drag
   */
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

  /**
   * This sets the preview of the image that is added to the current scene.
   */
  const setPreview = (e: any) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <SceneList rootName="Testing Default">
      {sceneContent &&
        sceneContent.map((item, index) => {
          return (
            <li
              key={index}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={setContent}
              draggable={true}
              className="scene-item"
            >
              {item}
              <input
                type="file"
                className="scene-item--btn"
                onChange={(e: any) => {
                  setPreview(e);
                }}
              />
            </li>
          );
        })}
    </SceneList>
  );
};
