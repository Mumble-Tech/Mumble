import React from 'react';
import '../App.css'
import {
    Box, 
    Progress, 
    Stack, 
    Center, 
    Image,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react';

  import { Link } from 'react-router-dom';

import image from '../assets/Vector.svg';

interface prop {
    hText: string;
    pText: string;
    width?: string;
}

const Stage = (props: prop) => {
    return (
        <Box bg='black' w={props.width} h='15vh' className='p-4 border rounded-lg'>
            <h1 className='text-4xl text-white'>{props.hText}</h1>
            <p className='font-sm' style={{
                color: '#CEC9AC'
            }}>{props.pText}</p>
        </Box>
    )
}

export default function Roadmap () {
    return (
        <>
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

             {/* Huge Icon Placeholder */}
             <Center>
                <Image boxSize='150px' src={image} alt='Dan Abramov' />
             </Center>

             
            <Center className='mb-6'>
                <Stack>
                <Center>
                    <h1 className='text-6xl font-regular flex justify-center p-2 ml-10 mb-6 text-center font-serif text-orange-300'>What’s next for Mumble?</h1>
                </Center>
                    <p className='text-2xl p-4 text-center font-light font-serif text-cyan-600'>Here is a list of the features we are working on, and the progress we have made so far.</p>
                </Stack>
            </Center>

            <Stack direction={'row'}>
                <p className='text-2xl p-4'>Creation</p>
             </Stack>

             <Progress hasStripe value={10} className='ml-4 w-auto mr-4'/>

            {/* Roadmap */}
            <div className='w-auto h-auto ml-2 p-1'>
                <Box>
                    <Stack w='auto' className='mt-6'>    
                        {/* <Progress value={10} /> */}
                        <Stage pText='Use the website to stream video content in multiple resolutions.' hText='Streaming Video' width='45%'/>
                        <Stage pText='Optionally be able to download video content off of the website' hText='Optional Download'  width='50%'/>
                        <Stage pText='Use the administration panel to check statistics, and upload new videos of premade content' hText='Admin Panel'  width='55%'/>
                        <Stage pText='Stream live content through the Mumble App' hText='Actually Stream'  width='60%'/>
                        <Stage pText='Use the Mumble app not only to stream content but also to adjust in real time what is on the consumers screen' hText='Preview the Live Stream'  width='65%'/>
                        <Stage pText='Add Graphics, and Text to the screen live' hText='Add content to Stream'  width='70%'/>
                        <Stage pText='Record audio and video to file.' hText='Record to File'  width='75%'/>
                    </Stack>
                </Box>
            </div>
            
        </>
    );
}