import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormHeader.css";

const FormHeader = ({ stepsCounter, steps }) => {
  const stepsCounterText = `Step ${stepsCounter + 1} of ${steps.length}`;
  const progress = (stepsCounter + 1 / steps.length) * 100;
  const stepTitle = steps[stepsCounter].title;
  return (
    <>
      <p className="progress__bar__counter">{stepsCounterText}</p>
      <ProgressBar className="custom__progress__bar" style={{ backgroundColor: "rgb(210, 231, 247)" }} label={`${progress}%`} now={progress} />
      <h1 className="step__header">{stepTitle}</h1>
      <div className="line__break"></div>
    </>
  );
};

export default FormHeader;
