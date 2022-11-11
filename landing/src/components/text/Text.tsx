import './text.css';

interface TextComponents {
  innerText: string;
  textSize?: string;
  className?: string;
}

export const Heading = ({ innerText, className }: TextComponents) => {
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

export const RoadmapHeading = ({ innerText, className }: TextComponents) => {
  return (
    <h2
      className={`text-3xl ${className}`}
      style={{ fontFamily: 'Lato', fontWeight: 'bold', fontStyle: 'italic' }}
    >
      {innerText}
    </h2>
  );
};

export const RoadmapDescription = ({ innerText, className }: TextComponents) => {
  return (
    <p
      className={`text-md ${className} description`}
      style={{ color: '#695252', textDecoration: 'underline' }}
    >
      {innerText}
    </p>
  );
};

export const TeamHeading = ({ innerText, className }: TextComponents) => {
  return (
    <h3 className={`text-xl ${className}`} style={{ fontFamily: 'Lato', fontWeight: 'bold' }}>
      {innerText}
    </h3>
  );
};

export const TeamDescription = ({ innerText, className }: TextComponents) => {
  return (
    <span className={`text-sm ${className}`} style={{ color: '#695252', fontStyle: 'italic' }}>
      {innerText}
    </span>
  );
};
