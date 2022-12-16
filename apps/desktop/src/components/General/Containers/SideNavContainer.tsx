import {SpecialDiv, ContainerProps} from "./Container";
import './containers.scss';

export const  SideNavContainer = ({ children }: ContainerProps) => {
  return (
    <SpecialDiv className='side-nav-container'>
      {children}
    </SpecialDiv>
  )
};
