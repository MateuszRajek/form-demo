import Label from "../Label";
import "./Select.css";

const Select = ({ register, options, field, label }) => {
  return (
    <>
      <Label label={label} />
      <select className="form__select" {...register(field)}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
