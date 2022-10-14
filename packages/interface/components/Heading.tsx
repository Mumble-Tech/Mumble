import React from 'react';
import './uniStyles.css';

interface UniversalHeaderProps {
    innerText?: string;
    className?: string;
    color?: string;
}

export const Heading = (props: UniversalHeaderProps) => {
    return (
        <span
            className={`fancy-font ${props.className}`}
            style={{
                color: `${props.color}`
            }}
        >
            {props.innerText}
        </span>
    )
}