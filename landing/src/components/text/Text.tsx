import './text.css';

interface TextComponents {
    innerText: string;
    textSize?: string;
}

export const Heading = (props: TextComponents) => {
    return (
        <h1 className='heading p-8'>
            {props.innerText}
        </h1>
    );
}

export const SubHeading = (props: TextComponents) => {
    return (
        <span className='subheading'>
            {props.innerText}
        </span>
    );
}

export const Description = (props: TextComponents) => {
    return (
        <p className='description' style={{ fontSize: `${props.textSize}` }}>
            {props.innerText}
        </p>
    );
}