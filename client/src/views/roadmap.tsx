import React from 'react';
import '../App.css'

import {Box, Progress, Stack, Center, Image} from '@chakra-ui/react';
import { Heading, NavContainer } from '@mumble/interface';

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
                <NavContainer />
            </header>

             {/* Huge Icon Placeholder */}
             <Center>
                <Image boxSize='150px' src={image} alt='Dan Abramov' />
             </Center>

             
            <Center>
                <Stack>
                    <Heading 
                        innerText='What’s next for Mumble?'
                        className='text-6xl mt-6'
                    />
                    <p className='text-1xl mb-6' style={{ color: '#7FBCD2' }}>Here is a list of the features we are working on, and the progress we have made so far.</p>
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
                        <Stage pText='Use the Mumble streaming app to record your screen and save it to different file formats' hText='Recording the Screen' width='45%'/>
                        <Stage pText='Use the Mumble streaming app to stream to the web services' hText='Streaming to the website'  width='50%'/>
                        <Stage pText='Use the Mumble streaming app to stream to the web services' hText='Watching the Stream ( Maybe Commets! )'  width='55%'/>
                    </Stack>
                </Box>
            </div>
            
        </>
    );
}