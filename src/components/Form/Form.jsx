import "./Form.css";

const Form = ({ children, onSubmit, handleSubmit }) => {
  return (
    <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};

export default Form;
