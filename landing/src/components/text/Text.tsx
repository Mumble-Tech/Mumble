import './text.css';

import logo from '../../../public/l.svg';
interface TextComponents {
  innerText: string;
  textSize?: string;
  className?: string;
}

export const Heading = (props: TextComponents) => {
  return (
    <div className="flex lg:fixed lg:left-[1rem]">
      <img src={logo} alt="logo image" className="sm:hidden lg:flex w-[12rem] h-[10rem]" />
      <h1 className="heading lg:top-[2rem]">{props.innerText}</h1>
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
