interface props {
  text: string;
}

export const Label = (props: props) => {
  return <label>{props.text}</label>;
};
