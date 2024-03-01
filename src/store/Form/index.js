import { UPDATE_FORM } from "./actionsType";

const initialState = {
  formData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { formField, data } = action.payload.data;
      console.log(formField, data);
      return {
        ...state,
        formData: { [formField]: data },
      };
    default:
      return state;
  }
};
