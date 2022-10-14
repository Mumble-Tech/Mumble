import './App.css';
import { Heading, NavContainer, FooterContainer, Button, Description } from '@mumble/interface';

function App() {
  return (
    <div>
      <NavContainer>
        <Button innerText='roadmap' className='p-4 hover:underline' />
      </NavContainer>

      <Heading 
        innerText='Welcome to Mumble' 
        className='text-6xl font-regular flex justify-center p-8 ml-12'
      />

      <hr className='flex justify-center  ml-12 border-black rounded-sm'/>

      <Description 
        content='Mumble is a streaming service for people to stream their Christian Sermon streams to. It aims to solve the problem that some people at churches don’t understand how to use a streaming service, but we also solve the problem of only being able to stream from the U.S. Streaming to Mumble can be done anywhere. '
        className='text-2xl p-8 text-center ml-8'
      />

      <Button 
        className='flex justify-center text-center p-4 ml-60 mt-12 btn-continue rounded-md'
        innerText='Continue to Mumble....'
      />

      <FooterContainer>
            <Button 
              className='sticky top-[100]vh text-center ml-12 mt-52 copyright'
              innerText='contact'
            />
            <p className='sticky top-[100]vh text-center ml-52 mt-56 copyright'> ©MumbleLLC</p>
      </FooterContainer>

    </div>
  );
}

export default App;
