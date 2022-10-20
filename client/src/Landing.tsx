import './App.css';
import { useState } from 'react';

import {
  Center, 
  Button, 
  CircularProgress, 
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';


import Slider from './components/slideshow/slider';

function Landing() {
  const [click, setClick] = useState(false);

  if (click)
    console.log('worked');
    

  return (
    <>
      <div className='col flex-stack justify-center mr-4 header-text'>
      <header className='p-4 ml-12 w-full h-full'>
        <Breadcrumb spacing='8px'>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink><Link to='/'>home</Link></BreadcrumbLink>
            </BreadcrumbItem>
        
            <BreadcrumbItem>
              <BreadcrumbLink><Link to='/roadmap'>roadmap</Link></BreadcrumbLink>
            </BreadcrumbItem>
        
            <BreadcrumbItem>
                
            </BreadcrumbItem>
        </Breadcrumb>
        </header>

        <Center>
          <div className='header-text'>
            <h1 className='text-6xl font-regular flex justify-center p-2 ml-10 mb-6'>Welcome to Mumble</h1>
          </div>
        </Center>
          <p className='text-1xl font-regular flex justify-center p-2 ml-10 mb-10'>Mumble is a streaming service for people to stream their Christian Sermon streams to. It aims to solve the problem that some people at churches don’t understand how to use a streaming service, but we also solve the problem of only being able to stream from the U.S. Streaming to Mumble can be done anywhere.  </p>
        <Center>

        </Center>

        <hr className='flex justify-center  ml-24 mb-10 border-black rounded-sm w80'/>
      
        <Center>
          {!click && (
            <Stack>
                <Popover>
                  <PopoverTrigger>
                    <Button bg='#9ED2C6' w='30vw' h='8vh'>Join the Email List</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>We will email you with updates</PopoverHeader>
                    <PopoverBody>
                      <Input placeholder='email' bgColor='#FFFFFF' className='p-4 w-full mb-2 border rounded-md border-gray-200' />
                      <Button onClick={() => { setClick(!click) }}>Submit</Button>
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
