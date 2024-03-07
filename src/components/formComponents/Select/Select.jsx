import Label from "../Label";
import "./Select.css";

const Select = ({ register, options, field, label, bottomLabel }) => {
  return (
    <div className="select__wrapper">
      {label && <Label label={label} />}
      <select className="form__select" {...register(field)}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      {bottomLabel && <label className="form__input__label">{bottomLabel}</label>}
    </div>
  );
};

export default Select;
