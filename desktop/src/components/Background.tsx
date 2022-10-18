import React from "react";

import '../styles/background.css';

interface prop {
    children: any;
}

export function Background (props: prop) {
    return (
        <div className="bg-dark-trans">
            {props.children}
        </div>
    )
}