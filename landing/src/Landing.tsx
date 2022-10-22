import './App.css';
import React from 'react';

import { Heading, Description, SubHeading } from './components/text/Text';
import { Container } from './components/container/Container';
import { SocialLinkNav } from './components/socialLinks/LinkNav';
import { Button } from './components/button/Button';

function Landing() {
  return (
    <div>            
      <Heading innerText='Welcome...' />  
      <Container className=''>    
        <div className='p-10 border rounded-lg left-10 max-w-md fixed shadow-md' style={{ backgroundColor: '#98694F' }}>
          <SubHeading innerText='What is mumble?' />
          <Description innerText='Mumble is a streaming service for low internet
                                  economies, so that they can expirence the vast
                                  world of streaming like we do.'/>
          <SubHeading innerText='When / how will mumble release?' />
          <Description innerText='Mumble is planned to release Q3 of next year.
                                  Mumble is also an open source projcet, if you 
                                  would like the help the idea develope please 
                                  contribute!' />  
        </div>
      </Container>   
      <Container className=''> 
        <div className='fixed right-20 mx-w-md w-96 top-8 p-12 text-left rounded-lg shadow-lg' style={{ backgroundColor: '#CA9E7B', border: '1px solid #CA9E7B' }}>
          <Description innerText='Mumble is a streaming service for people with 
                                  low internet environments. We aim to solve the 
                                  problem of people not being able to access video
                                  streaming world-wide. Mumble started as a passion,
                                  and as a realization that people in every country don’t
                                  expirence streaming in the same way we do. 
                                  It was that realization that encouraged us to create
                                  Mumble. Signup for our email notification to get more info
                                  on the progress of Mumble’s development.' textSize='22px'/>  
          <Button />
        </div>
      </Container> 

      <SocialLinkNav />
    </div>
  );
}

export default Landing;
