import React from 'react';

interface UniversalInputProps {
    value?: any;
    onChange?: any;
    placeholder: string;
    className?: string;
    width?: number;
    height?: number;
    textColor?: string;
    bgColor?: string;
}

export const TextArea = (props: UniversalInputProps) => {
    return (
        <textarea
            className={`${props.className}`}
            style={{
                color: `${props.textColor}`,
                backgroundColor: `${props.bgColor}`
            }}
            value={props.value}
            placeholder={props.placeholder}
        ></textarea>
    )
}

export const TextInput = (props: UniversalInputProps) => {
    return (
        <input 
            className={props.className}
            value={props.value}
            placeholder={props.placeholder}
            style={{
                color: `${props.textColor}`,
                backgroundColor: `${props.bgColor}`
            }}
        />
    )
}