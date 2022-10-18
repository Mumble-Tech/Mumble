import React from 'react';
import { FlexContainerProps } from './containers.types';

function FlexContainer (props: FlexContainerProps) {
    return (
        <div className='flex justify-center'>
            {props.children}
        </div>
    )
}


export default FlexContainer;