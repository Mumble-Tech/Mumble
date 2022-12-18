import {SideNavContainer} from "../components/General/Containers/SideNavContainer";
import {Header, HeaderLine} from "../components/Text/Text";
import '../components/Text/text.scss';
import {UserInformationContainer} from "../components/General/Containers/UserInformationContainer";
import { IconContainer } from "../components/General/Containers/IconContainer";

//  Icons
import { AiFillHome } from 'react-icons/ai';

export const HomePage = () => {
  return (
    <>
      <SideNavContainer>
        <UserInformationContainer userName='Deondre' imageSrc='logo.png'>
          <div>Deondre</div>
        </UserInformationContainer>
        <HeaderLine />
        {/* Header MENU */}
        <Header className='heading-text'>
          Menu
        </Header>
        {/* ContainerList */}
        <ul>
          <IconContainer iconSrc={
            <AiFillHome className='shadow-lg mr-8' fill='#4BD8C7' />
          }>
          </ IconContainer>
        </ul>
      </SideNavContainer>
      <p>Test</p>
    </>
  )
};
