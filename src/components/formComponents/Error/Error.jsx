import "./Error.css";

const Error = ({ message = "Field required" }) => {
  return <span className="form__error__message">{message}</span>;
};

export default Error;
