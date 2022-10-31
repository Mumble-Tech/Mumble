import './inputs.scss';

interface input {
  onChange?: any;
}

export const Input = (props: input) => {
  return <input type="text" className="text-input" onChange={props.onChange} />;
};
