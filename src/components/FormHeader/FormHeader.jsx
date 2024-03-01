import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormHeader.css";

const FormHeader = ({ stepTitle }) => {
  return (
    <>
      <h2 className="step__header">{stepTitle}</h2>
      <div className="line__break"></div>
    </>
  );
};

export default FormHeader;
