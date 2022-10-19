import React from 'react';
import { NavContainer, Heading, Button, TextArea, TextInput, FooterContainer } from '@mumble/interface';

export default function Contact () {
    return (
        <div>
            <header className='p-4 ml-12 w-full h-full'>
                <NavContainer />
            </header>

            <Heading 
                innerText='Contact' 
                className='text-6xl font-regular flex justify-center p-4 ml-6'
            />

            <hr className='flex justify-center ml-24 mt-6 border-black rounded-sm w80'/>

            <div className='flex justify-center mt-12 mb-4'>
                <TextInput
                    placeholder='Full Name'
                    textColor='#000000'
                    bgColor='#EEF1FF'
                    className='p-4 w-96 border rounded-sm'
                />
            </div>

            <div className='flex justify-center'>
                <TextInput
                    placeholder='Email'
                    textColor='#000000'
                    bgColor='#EEF1FF'
                    className='p-4 w-96 border rounded-sm'
                />
            </div>

            <div className='flex justify-center mt-4'>
                <TextArea
                    placeholder='Message'
                    textColor='#000000'
                    bgColor='#EEF1FF'
                    className='p-4 w-96 border rounded-sm'
                />
            </div>
        </div>
    );
}