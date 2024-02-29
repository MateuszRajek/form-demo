import { useState } from "react";
import Form from "../Form";
import AppointmentDetails from "../FormSteps/AppointmentDetails";
import Consent from "../FormSteps/Consent";
import GPDetails from "../FormSteps/GPDetails";
import PatientAddress from "../FormSteps/PatientAddress";
import PatientDetails from "../FormSteps/PatientDetails";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppointmentForm.css";

const screens = {
  appointment: AppointmentDetails,
  patient: PatientDetails,
  gp: GPDetails,
  address: PatientAddress,
  consent: Consent,
};

const steps = [
  { step: "appointment", title: "Appointment Details" },
  { step: "patient", title: "Patient Contact Details" },
  { step: "gp", title: "GP Contact Details" },
  { step: "address", title: "Patient Address" },
  { step: "consent", title: "Consent" },
];

const AppointmentForm = () => {
  const [stepsCounter, setStepsCounter] = useState(0);

  const ActiveScreen = screens[steps[stepsCounter].step];

  const stepsCounterText = `Step ${stepsCounter + 1} of ${steps.length}`;
  const progress = (stepsCounter + 1 / steps.length) * 100;
  const stepTitle = steps[stepsCounter].title;
  return (
    <div className="form__container">
      <p className="progress__bar__counter">{stepsCounterText}</p>
      <ProgressBar className="custom__progress__bar" style={{ backgroundColor: "rgb(210, 231, 247)" }} label={`${progress}%`} now={progress} />
      <h1 className="step__header">{stepTitle}</h1>
      <div className="line__break"></div>
      <Form>
        <ActiveScreen />
      </Form>
    </div>
  );
};

export default AppointmentForm;
