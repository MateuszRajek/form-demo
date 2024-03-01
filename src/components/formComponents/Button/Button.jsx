import "./Button.css";

const Button = ({ label, color, type, action }) => {
  return (
    <button className={`button button--${color}`} type={type} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
