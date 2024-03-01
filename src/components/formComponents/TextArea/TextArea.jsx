import Label from "../Label";
import "./TextArea.css";

const TextArea = ({ label, rows, field, register }) => {
  return (
    <>
      <Label label={label} />
      <textarea className="form__textarea" {...register(field)} rows={rows} />
    </>
  );
};

export default TextArea;
