import Input from "../../formComponents/Input";
import Label from "../../formComponents/Label";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PatientDetails.css";
import Checkbox from "../../formComponents/Checkbox";

const PatientDetails = ({ register, control }) => {
  return (
    <>
      <div className="section__wrapper">
        <Label label="Name" />
        <div className="inputs__wrapper">
          <Input register={register} type="text" label="First" field="FirstName" />
          <Input register={register} type="text" label="Last" field="LastName" />
        </div>
      </div>
      <div className="section__wrapper">
        <Label label="Email" required />
        <div className="inputs__wrapper">
          <Input register={register} type="email" label="Enter Email" field="Email" />
          <Input register={register} type="email" label="Confirm Email" field="ConfirmedEmail" />
        </div>
      </div>
      <div className="section__wrapper">
        <Label label="Phone" />
        <Input register={register} type="phone" field="Phone" />
      </div>

      <div className="section__wrapper date__section__wrapper">
        <>
          <div>
            <div>
              <Label label="Date of birth" />
            </div>

            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  onChange={(date) => {
                    field.onChange(date);
                  }}
                  selected={field.value}
                />
              )}
            />
          </div>
        </>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Label label="Over 16 years old?" required />
          </div>
          <Checkbox type="radio" label="over 16" register={register} field="AgeConfirmation" value={true} />
          <Checkbox type="radio" label="under 16" register={register} field="AgeConfirmation" value={false} />
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
