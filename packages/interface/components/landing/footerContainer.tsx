import React from 'react';

interface FooterCotainerProps {
    children: React.ReactNode;
}

export const FooterContainer = (props: FooterCotainerProps) => {
    return (
        <footer className='flex flex-col h-screen justify-between'>
            {props.children}
        </footer>
    )
}