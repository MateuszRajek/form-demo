import { useState } from "react";
import Form from "../Form";
import AppointmentDetails from "../FormSteps/AppointmentDetails";
import Consent from "../FormSteps/Consent";
import GPDetails from "../FormSteps/GPDetails";
import PatientAddress from "../FormSteps/PatientAddress";
import PatientDetails from "../FormSteps/PatientDetails";
import "./AppointmentForm.css";
import FormHeader from "../FormHeader";
import Button from "../Button";

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

  const onNextClick = (event) => {
    event.preventDefault();
    if (stepsCounter < steps.length - 1) {
      setStepsCounter((prevStep) => prevStep + 1);
    }
  };

  const onPreviousClick = () => {
    setStepsCounter((prevStep) => prevStep - 1);
  };

  const ActiveScreen = screens[steps[stepsCounter].step];

  return (
    <div className="form__container">
      <Form onSubmit={onNextClick}>
        <FormHeader stepsCounter={stepsCounter} steps={steps} />
        <ActiveScreen />
        <div className="buttons__wrapper">
          {stepsCounter !== 0 && <Button label="Previous" color="light" type="button" action={onPreviousClick} />}
          <Button label="Next" color="dark" type="submit" action={onNextClick} />
        </div>
      </Form>
    </div>
  );
};

export default AppointmentForm;
