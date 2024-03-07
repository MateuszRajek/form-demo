import "./Label.css";

const Label = ({ label, required = false }) => {
  return (
    <>
      <span className="form__fields__label">{label}</span>
      {required && <span className="form__fields__label--required">(Required)</span>}
    </>
  );
};

export default Label;
