import './App.css';

import { Heading, Description, SubHeading } from './components/text/Text';
import { Container } from './components/container/Container';
import { SocialLinkNav } from './components/socialLinks/LinkNav';
import { Button } from './components/button/Button';

function Landing() {
  return (
    <div className=''>            
      <Heading innerText='Welcome...' />  
      <Container className=''>    
        <div className='lg:fixed lg:left-[3rem] lg:w-[42vw] lg:h-[60%] lg:mt-2 lg:top-[10rem] lg:max-w-xl lg:p-12 sm:p-10 border rounded-lg h-auto  shadow-lg sm:max-w-md sm:w-screen container-1' style={{ backgroundColor: '#98694F', border: '1px solid #98694F' }}>
          <SubHeading innerText='What is mumble?' />
          <Description innerText='Mumble is a streaming service for low internet
                                  economies, so that they can expirence the vast
                                  world of streaming like we do.' textSize='lg'/>
          <SubHeading innerText='When / how will mumble release?' />
          <Description innerText='Mumble is planned to release Q3 of next year.
                                  Mumble is also an open source projcet, if you 
                                  would like the help the idea develope please 
                                  contribute!' textSize='lg'/>  
          <SubHeading innerText='How can I help?' className='sm:hidden lg:flex'/>         
          <Description innerText='Its easy! you can help by going to the Github and leaving a star, or you can contribute to the project. Lots of choices little time to make the right one!' textSize='lg' className='sm:hidden lg:flex' />
        </div>
      </Container>   
      <Container className=''> 
        <div className='lg:fixed lg:right-20 lg:top-0 mx-w-md lg:w-[45%] sm:h-auto lg:h-[90%] lg:text-3xl sm:w-screen p-12 text-left rounded-lg shadow-lg sm:mt-96 lg:mt-8' style={{ backgroundColor: '#CA9E7B', border: '1px solid #CA9E7B' }}>
          <Description innerText='Mumble is a streaming service for people with 
                                  low internet environments. We aim to solve the 
                                  problem of people not being able to access video
                                  streaming world-wide. Mumble started as a passion,
                                  and as a realization that people in every country don’t
                                  expirence streaming in the same way we do. 
                                  It was that realization that encouraged us to create
                                  Mumble. Signup for our email notification to get more info
                                  on the progress of Mumble’s development.' textSize='lg'/>  
          <Button />
        </div>
      </Container> 

      <SocialLinkNav />
    </div>
  );
}

export default Landing;
