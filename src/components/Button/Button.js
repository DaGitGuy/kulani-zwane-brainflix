import './Button.scss';

const Button = (props) => {
  return (
    <button className={props.use}>{props.purpose}</button>
  );
};

export default Button;