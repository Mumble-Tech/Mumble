import {ContainerProps, SpecialDiv} from "./Container";
import './containers.scss';
import {useEffect, useState} from "react";
import mime from 'mime-types';

import circle from '../../../assets/Circle.svg';

export const UserInformationContainer = ({ children, imageSrc, userName }: ContainerProps)  => {
  return (
    <SpecialDiv className='user-information'>
      {/* @ts-ignore */}
      <img src={circle} alt={`${userName}'s user image`} className='user-information--image' typeof={'image/png'} />
      <span className='user-information--text'>{userName}</span>
    </SpecialDiv>
  )
}
