import React from 'react';

interface DescriptionProps {
    content: string;
    className?: string;
}

export const Description = (props: DescriptionProps) => {
    return (
        <p className={`desc-font ${props.className}`}>{props.content}</p>
    )
}