import "./Input.css";

const Input = ({ type, label, register, field, required, errors, validate = null }) => {
  return (
    <div className="input__wrapper">
      <input
        {...register(field, {
          required,
          validate: validate
            ? (value) => {
                return value === validate || "Emails must match";
              }
            : null,
        })}
        className="form__input--text"
        type={type}
      />
      <label className="form__input__label">{label}</label>
    </div>
  );
};

export default Input;
