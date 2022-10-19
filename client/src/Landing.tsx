import './App.css';
import { Heading, NavContainer, FooterContainer, Description, TextInput } from '@mumble/interface';
import { Center, Button, CircularProgress, Box, SkeletonText, SkeletonCircle } from '@chakra-ui/react';
import { useState } from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stack
} from '@chakra-ui/react'
import Slider from './components/slideshow/slider';

function Landing() {
  const [click, setClick] = useState(false);

  if (click)
    console.log('worked');
    

  return (
    <>
      <div className='col flex-stack justify-center mr-4 header-text'>
        <header className='p-4 ml-12 w-full h-full'>
            <NavContainer />
        </header>

        <Heading 
          innerText='Welcome to Mumble' 
          className='text-6xl font-regular flex justify-center p-2 ml-10 module-1'
        />

        <hr className='flex justify-center  ml-24 border-black rounded-sm w80'/>

        <Description 
          content='Mumble is a streaming service for people to stream their Christian Sermon streams to. It aims to solve the problem that some people at churches don’t understand how to use a streaming service, but we also solve the problem of only being able to stream from the U.S. Streaming to Mumble can be done anywhere.  '
          className='text-2xl p-8 text-center ml-6 module 2'
        />
      
        <Center>
          {!click && (
            <Stack>
              {/* <Button onClick={() => {setClick(!click)}} bg='#9ED2C6' w='30vw' h='8vh'>Continue to Mumble</Button> */}
                <Popover>
                  <PopoverTrigger>
                    <Button bg='#9ED2C6' w='30vw' h='8vh'>Join the Email List</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>We will email you with updates</PopoverHeader>
                    <PopoverBody>
                      <TextInput placeholder='email' bgColor='#FFFFFF' className='p-4 w-full mb-2 border rounded-md border-gray-200'></TextInput>
                      <Button>Submit</Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
            </Stack>
              
          )}
          {click && ( 
            <>
              <CircularProgress isIndeterminate color='green.300' />
            </>
            
          )}
        </Center>

        {/* Join the Email List */}
        <Center>
          <Slider />
        </Center>
      </div>
    </>
  );
}

export default Landing;
