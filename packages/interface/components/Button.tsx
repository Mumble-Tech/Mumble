import React from 'react';

interface UniversalButtonTypes {
    onClick?: any;
    innerText: string;
    className: any;
    bgColor?: string;
}

export const Button = (props: UniversalButtonTypes) => {
    return (
        <button
            onClick={props.onClick}
            className={`${props.className}`}
            style={{
                backgroundColor: `link-font ${props.bgColor}`
            }}
        >
            {props.innerText}
        </button>
    );
}