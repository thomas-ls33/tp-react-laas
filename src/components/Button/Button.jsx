import "./Button.scss";

const Button = ({ text, isActive, onClick }) => {
  return (
    <button className={isActive ? "active" : ""} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
