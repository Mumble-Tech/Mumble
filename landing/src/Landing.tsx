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
  const [playing, setPlaying] = useState(false);

  if (playing) {
    setTimeout(() => {
      alert('saved the email! Thanks! 🎉')
    }, 1000);
  }

  return (
    <>
      <div className='col flex-stack justify-center mr-4 header-text bg-slate-300'>
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
            <h1 className='text-6xl font-regular flex justify-center p-4 ml-10 font-medium text-orange-400 '>Welcome to Mumble</h1>
          </div>
        </Center>
          
        <Center>
        <p className='text-2xl font-regular flex justify-center p-2 ml-10 mb-10 text-center font-serif text-purple-400'>Mumble is a streaming service for people to stream their Christian Sermon streams to. It aims to solve the problem that some people at churches don’t understand how to use a streaming service, but we also solve the problem of only being able to stream from the U.S. Streaming to Mumble can be done anywhere.  </p>
        </Center>

        <hr className='flex justify-center  ml-24 mb-10 border-black rounded-sm w80'/>
      
        <Center>
          {!click && (
            <Stack>
                <Popover>
                  <PopoverTrigger>
                    <Button w='30vw' bg='#fb923c' h='8vh'>Join the Email List</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>We will email you with updates</PopoverHeader>
                    <PopoverBody>
                      <Input type='email' placeholder='email' bgColor='#FFFFFF' className='p-4 w-full mb-2 border rounded-md border-gray-200' />
                      <Button onClick={() => { 
                        setClick(!click);
                        setPlaying(!playing)
                        }}>Submit</Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
            </Stack>
              
          )}
          {click && ( 
            <>
              <CircularProgress isIndeterminate color='green.300' onCanPlay={() => {}} />
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
