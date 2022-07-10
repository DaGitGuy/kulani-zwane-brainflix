import './Button.scss';

const Button = ({ use, purpose }) => {
  return (
    <button className={use}>{purpose}</button>
  );
};

export default Button;