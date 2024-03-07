import { countries } from "../../../data/mocksData";
import Input from "../../formComponents/Input";
import Label from "../../formComponents/Label";
import Select from "../../formComponents/Select";

const PatientAddress = ({ register }) => {
  return (
    <>
      <div className="section__wrapper">
        <Label label="Address" />
        <div className="inputs__wrapper address__wrapper">
          <Input register={register} type="text" label="Street Address" field="StreetFirstLine" />
        </div>
        <div className="inputs__wrapper address__wrapper">
          <Input register={register} type="text" label="Address Line 2" field="StreetSecondLine" />
        </div>
        <div className="inputs__wrapper address__wrapper">
          <Input register={register} type="text" label="City" field="City" />
          <Input register={register} type="text" label="County" field="County" />
        </div>
        <div className="inputs__wrapper address__wrapper" style={{ display: "flex" }}>
          <Input register={register} type="text" label="Eircode" field="Eircode" />
          <Select register={register} field="Country" options={countries} bottomLabel="Country" />
        </div>
      </div>
    </>
  );
};

export default PatientAddress;
