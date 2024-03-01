import "./Checkbox.css";

const Checkbox = ({ label, register, field, type, value, rounded = false, required }) => {
  return (
    <label className="radio__label">
      <input
        className="radio__input"
        type={type}
        {...register(field, {
          required,
        })}
        value={value}
      />
      <span className={`radio__span ${rounded ? "radio__span--round" : ""}`}>{label}</span>
    </label>
  );
};

export default Checkbox;
