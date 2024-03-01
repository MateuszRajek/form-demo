import { insurerCompanies } from "../../../data/mocksData";
import FormHeader from "../../FormHeader";
import Checkbox from "../../formComponents/Checkbox";
import Error from "../../formComponents/Error";
import Input from "../../formComponents/Input";
import Label from "../../formComponents/Label";
import TextArea from "../../formComponents/TextArea";

const GPDetails = ({ register, errors }) => {
  return (
    <>
      <div className="section__wrapper">
        <Label label="GP name" />
        <div className="inputs__wrapper">
          <Input register={register} type="text" label="First" field="GpFirstName" />
          <Input register={register} type="text" label="Last" field="GpLastName" />
        </div>
      </div>
      <div className="section__wrapper">
        <TextArea register={register} field="ClinicAddress" label="GP clinic address" rows={4} />
      </div>
      <div className="section__wrapper">
        <FormHeader stepTitle="Medical Insurance Details" />
        <Label label="Medical insurer" required />
        {insurerCompanies.map((insurer) => (
          <Checkbox register={register} field="MedicalInsurer" type="radio" label={insurer} value={insurer} rounded required />
        ))}
        {errors.MedicalInsurer && <Error />}
      </div>
    </>
  );
};

export default GPDetails;
