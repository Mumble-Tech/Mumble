import './text.css';

interface TextComponents {
    innerText: string;
    textSize?: string;
    className?: string;
}

export const Heading = (props: TextComponents) => {
    return (
        <h1 className='heading lg:fixed lg:left-[2rem]'>
            {props.innerText}
        </h1>
    );
}

export const SubHeading = (props: TextComponents) => {
    return (
        <span className={`subheading ${props.className}`}>
            {props.innerText}
        </span>
    );
}

export const Description = (props: TextComponents) => {
    return (
        <p className={`description ${props.className}`} style={{ fontSize: `t-${props.textSize}` }}>
            {props.innerText}
        </p>
    );
}