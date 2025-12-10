import "./Button.scss";

const Button = ({ text, isActive }) => {
  return <button className={isActive ? "active" : ""}>{text}</button>;
};

export default Button;
