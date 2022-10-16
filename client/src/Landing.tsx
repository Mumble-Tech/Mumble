import './App.css';
import { Heading, NavContainer, FooterContainer, Button, Description } from '@mumble/interface';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className='col flex-stack justify-center mr-4'>
        <NavContainer>
          <Link to='/roadmap' className='p-4 hover:underline ml-12'>roadmap</Link>
        </NavContainer>

        <Heading 
          innerText='Welcome to Mumble' 
          className='text-6xl font-regular flex justify-center p-2 ml-10 module-1'
        />

        <hr className='flex justify-center  ml-24 border-black rounded-sm w80'/>

        <Description 
          content='Mumble is a streaming service for people to stream their Christian Sermon streams to. It aims to solve the problem that some people at churches don’t understand how to use a streaming service, but we also solve the problem of only being able to stream from the U.S. Streaming to Mumble can be done anywhere.  '
          className='text-2xl p-8 text-center ml-6 module 2'
        />
      
        <Button 
            className='text-center p-4 mt-20 btn-continue rounded-md flex justify-center'
            innerText='Continue to Mumble....'
        />

        <FooterContainer>
          <Button 
            className='sticky top-[100]vh text-center ml-12 mt-56 copyright'
            innerText='contact'
          />
          <p className='sticky top-[100]vh text-center ml-52 mt-56 copyright'> ©MumbleLLC</p>
        </FooterContainer>

      </div>
    </>
  );
}

export default Landing;
