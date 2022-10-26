
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { filePreviewState } from '../recoil_state';
import './child.scss';

export enum SceneChild {
  POWERPOINT,
  IMAGE,
  TEXT,
  CAMERA
}

interface SceneChildProps {
  name: string;
  content?: any; // ! Not going to be a string finnally
  size?: [''];
  type: SceneChild;
  resizable?: boolean;
}

const noSize = (size: any, type: SceneChild): any => {
  if (!size) {
    switch (type) {
      case SceneChild.POWERPOINT:
        return ['300px', '300px'];
      case SceneChild.IMAGE:
        return ['300px', '300px'];
      case SceneChild.TEXT:
        return ['auto', 'auto'];
      case SceneChild.CAMERA:
        return ['50px', '50px'];  
      default:
        return ['50px', '50px'];
    }
  }
};

const checkColor = (type: SceneChild): string => {
  switch(type) {
    case SceneChild.POWERPOINT:
      return '#ab6441';
    case SceneChild.CAMERA: 
      return '#4c7555';
    case SceneChild.TEXT:
      return 'transparent';
    case SceneChild.IMAGE:
      return 'transarent';
    default:
      return '#ffffff';
  }
};


export const CreateSceneChild = (props: SceneChildProps) => {
  const file: any = useRecoilValue(filePreviewState);
  let content = noSize(props.size, props.type);

  return (
    <div className="child" style={{ width: `${content[0]}`, height: `${content[1]}`, backgroundColor: `${checkColor(props.type)}` }}>
      {props.name}
      <img src={file} className='test' />
      {/* <input type={"file"} onChange={(e: any) => { previewFile(e) }} placeholder='File Here' style={{ width: `${content[0]}`, height: `${content[1]}`}} /> */}
    </div>
  );
};
