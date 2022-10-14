import React from 'react';

interface NavContainer {
    children: React.ReactNode;
    /**
     * This is the className for the given item, Not the ClassName for the cotnianer
     */
    className?: string;
}

export const NavContainer = (props: NavContainer) => {
    return (
        <div className='flex justify-between'>
            {props.children}
        </div>
    )
}