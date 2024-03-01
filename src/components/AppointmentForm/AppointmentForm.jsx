import { useState } from "react";
import Form from "../Form";
import AppointmentDetails from "../FormSteps/AppointmentDetails";
import Consent from "../FormSteps/Consent";
import GPDetails from "../FormSteps/GPDetails";
import PatientAddress from "../FormSteps/PatientAddress";
import PatientDetails from "../FormSteps/PatientDetails";
import "./AppointmentForm.css";
import FormHeader from "../FormHeader";
import Button from "../formComponents/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateForm } from "../../store/Form/actions";

const screens = {
  appointment: AppointmentDetails,
  patient: PatientDetails,
  gp: GPDetails,
  address: PatientAddress,
  consent: Consent,
};

const steps = [
  { step: "appointment", title: "Appointment Details", key: "appointmentDetails" },
  { step: "patient", title: "Patient Contact Details", key: "patientDetails" },
  { step: "gp", title: "GP Contact Details", key: "gpDetails" },
  { step: "address", title: "Patient Address", key: "patientAddress" },
  { step: "consent", title: "Consent", key: "consent" },
];

const AppointmentForm = () => {
  const [stepsCounter, setStepsCounter] = useState(0);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formData = {
      formField: steps[stepsCounter].key,
      data,
    };
    dispatch(updateForm(formData));
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
      <FormHeader stepsCounter={stepsCounter} steps={steps} />
      <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <ActiveScreen register={register} />
        <div className="buttons__wrapper">
          {stepsCounter !== 0 && <Button label="Previous" color="light" type="button" action={onPreviousClick} />}
          <Button label="Next" color="dark" type="submit" />
        </div>
      </Form>
    </div>
  );
};

export default AppointmentForm;
