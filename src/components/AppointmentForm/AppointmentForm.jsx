import { useState } from "react";
import Form from "../Form";
import AppointmentDetails from "../FormSteps/AppointmentDetails";
import Consent from "../FormSteps/Consent";
import GPDetails from "../FormSteps/GPDetails";
import PatientAddress from "../FormSteps/PatientAddress";
import PatientDetails from "../FormSteps/PatientDetails";

const screens = {
  appointment: AppointmentDetails,
  patient: PatientDetails,
  gp: GPDetails,
  address: PatientAddress,
  consent: Consent,
};

const steps = ["appointment", "patient", "gp", "address", "consent"];

const AppointmentForm = () => {
  const [stepsCounter, setStepsCounter] = useState(0);
  const ActiveScreen = screens[steps[stepsCounter]];

  return (
    <Form>
      <ActiveScreen />
    </Form>
  );
};

export default AppointmentForm;
