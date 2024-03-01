import Select from "../../formComponents/Select";
import { appointmentType, locationData } from "../../../data/mocksData";
import TextArea from "../../formComponents/TextArea";

const AppointmentDetails = ({ register }) => {
  return (
    <div className="section__wrapper">
      <Select register={register} field="Practitioner" options={appointmentType} label="Appointment type" />
      <Select register={register} field="Location" options={locationData} label="Preffered location" />
      <TextArea register={register} field="IssueDescription" label="Explain your skin issue" rows={10} />
    </div>
  );
};

export default AppointmentDetails;
