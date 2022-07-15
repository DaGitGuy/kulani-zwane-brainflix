import './Button.scss';

const Button = ({ className, use, purpose }) => {
  return (
    <div className={className+' '+use}>{purpose}</div>
  );
};

export default Button;