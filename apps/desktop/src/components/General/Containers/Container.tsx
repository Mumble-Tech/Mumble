import React, {SVGProps} from "react";
import styled from 'styled-components';
import './containers.scss';

export interface ContainerProps {
  children: React.ReactNode;
  imageSrc?: string;
  iconSrc?: any;
  userName?: string;
}

export const SpecialDiv = styled.div`
`;


/**
 * Container is the Root element ( that isn't div, obviously. )
 * */
export const Container = ({ children }: ContainerProps ) => {
  return (
    <SpecialDiv className='container-root'>
      {children}
    </SpecialDiv>
  );
};
