import { consentOptions } from "../../../data/mocksData";
import Checkbox from "../../formComponents/Checkbox";
import Error from "../../formComponents/Error";
import Label from "../../formComponents/Label";

const Consent = ({ register, errors }) => {
  return (
    <>
      <div className="section__wrapper">
        <Label label="Medical insurer" required />
        {consentOptions.map(({ consent, text }) => {
          return (
            <div key={consent}>
              <Checkbox register={register} field={consent} type="checkbox" label={text} required />
              {errors[consent] && <Error />}
            </div>
          );
        })}
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga quos dolor eos, error temporibus unde tenetur quae! Quidem inventore adipisci neque illum quam voluptates! Dolores
        aspernatur modi atque? Aut dolor autem qui! Porro, doloremque fugit. Fugiat, in dolor dicta quae quos sit accusamus rem corporis. Modi eligendi assumenda id mollitia hic ducimus fuga. Impedit
      </p>
    </>
  );
};

export default Consent;
