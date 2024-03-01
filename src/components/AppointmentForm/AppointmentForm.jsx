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
import { ProgressBar } from "react-bootstrap";
import { steps } from "../../data/mocksData";

const screens = {
  appointment: AppointmentDetails,
  patient: PatientDetails,
  address: PatientAddress,
  gp: GPDetails,
  consent: Consent,
};

function formatDate(date) {
  if (date) {
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0"); // Miesiące są od 0 do 11
    let year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
}

const AppointmentForm = () => {
  const [stepsCounter, setStepsCounter] = useState(0);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const email = watch("Email");

  const onSubmit = (data) => {
    if (data.date && typeof data.date === "object") {
      data.date = formatDate(data.date);
    }

    dispatch(updateForm(data));

    if (stepsCounter < steps.length - 1) {
      setStepsCounter((prevStep) => prevStep + 1);
    }
  };

  const onPreviousClick = () => {
    setStepsCounter((prevStep) => prevStep - 1);
  };

  const ActiveScreen = screens[steps[stepsCounter].step];

  const stepsCounterText = `Step ${stepsCounter + 1} of ${steps.length}`;
  const progress = ((stepsCounter + 1) / steps.length) * 100;
  const stepTitle = steps[stepsCounter].title;

  return (
    <div className="form__container">
      <p className="progress__bar__counter">{stepsCounterText}</p>
      <ProgressBar className="custom__progress__bar" style={{ backgroundColor: "rgb(210, 231, 247)" }} label={`${progress}%`} now={progress} />
      <FormHeader stepTitle={stepTitle} />
      <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <ActiveScreen register={register} control={control} errors={errors} email={email} />
        <div className="buttons__wrapper">
          {stepsCounter !== 0 && <Button label="Previous" color="light" type="button" action={onPreviousClick} />}
          <Button label="Next" color="dark" type="submit" />
        </div>
      </Form>
    </div>
  );
};

export default AppointmentForm;
