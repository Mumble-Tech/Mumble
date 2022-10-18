import React from "react";
import { UniversalButtonProps } from "./reusable.type";

export function UniversalButton (props: UniversalButtonProps) {
    return (
        <button
            onClick={props.OnClick}
            className={`p-4 ${props.className}`}
            placeholder={props.placeholder}
        >
            {props.innerText}
        </button>
    )
}