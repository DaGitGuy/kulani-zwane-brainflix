import './Button.scss';

const Button = ({ className, use, purpose }) => {
  return (
    <button className={className+' '+use}>{purpose}</button>
  );
};

export default Button;