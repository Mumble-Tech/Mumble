import './text.css';

interface TextComponents {
  innerText: string;
  textSize?: string;
  className?: string;
}

export const Heading = ({innerText, className}: TextComponents) => {
  return (
    <div className={`flex ${className}`}>
      <h1 className="heading">{innerText}</h1>
    </div>
  );
};

export const SubHeading = (props: TextComponents) => {
  return <span className={`subheading ${props.className}`}>{props.innerText}</span>;
};

export const Description = (props: TextComponents) => {
  return (
    <p className={`description ${props.className}`} style={{ fontSize: `t-${props.textSize}` }}>
      {props.innerText}
    </p>
  );
};
