import "./Input.css";

const Input = ({ type, label, register, field }) => {
  return (
    <div className="input__wrapper">
      <input {...register(field)} className="form__input--text" type={type} />
      <label className="form__input__label">{label}</label>
    </div>
  );
};

export default Input;
