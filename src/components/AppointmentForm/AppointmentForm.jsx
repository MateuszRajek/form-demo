import { useState } from "react";
import Form from "../Form";
import AppointmentDetails from "../FormSteps/AppointmentDetails";
import Consent from "../FormSteps/Consent";
import GPDetails from "../FormSteps/GPDetails";
import PatientAddress from "../FormSteps/PatientAddress";
import PatientDetails from "../FormSteps/PatientDetails";
import "./AppointmentForm.css";
import FormHeader from "../FormHeader";

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

  return (
    <div className="form__container">
      <Form>
        <FormHeader stepsCounter={stepsCounter} steps={steps} />
        <ActiveScreen />
      </Form>
    </div>
  );
};

export default AppointmentForm;
