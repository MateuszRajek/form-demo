import "./Checkbox.css";

const Checkbox = ({ label, register, field, type, value, rounded = false }) => {
  return (
    <label className="radio__label">
      <input className="radio__input" type={type} name="radio" {...register(field)} value={value} />
      <span className={`radio__span ${rounded ? "radio__span--round" : ""}`}>{label}</span>
    </label>
  );
};

export default Checkbox;
