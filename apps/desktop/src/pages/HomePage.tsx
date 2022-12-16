import {SideNavContainer} from "../components/General/Containers/SideNavContainer";
import {Header, HeaderLine} from "../components/Text/Text";
import '../components/Text/text.scss';
import {UserInformationContainer} from "../components/General/Containers/UserInformationContainer";

export const HomePage = () => {
  return (
    <>
      <SideNavContainer>
        <UserInformationContainer userName='Deondre' imageSrc='logo.png'>
          <div>Deondre</div>
        </UserInformationContainer>
       <HeaderLine />
        <Header className='heading-text'>
          Menu
        </Header>
      </SideNavContainer>
      <p>Test</p>
    </>
  )
};
