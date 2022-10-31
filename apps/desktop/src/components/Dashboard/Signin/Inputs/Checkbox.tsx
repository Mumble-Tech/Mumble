import './inputs.scss';

interface checkboxProps {
  text?: string;
}

export const Checkbox = (props: checkboxProps) => {
  return (
    <label className="container">
      {props.text}
      <input type="container--checkbox" checked={false} />
      <span className="container--checkmark"></span>
    </label>
  );
};
