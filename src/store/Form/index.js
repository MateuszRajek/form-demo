import { UPDATE_FORM } from "./actionsType";

const initialState = {
  formData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { data } = action.payload;
      return {
        ...state,
        formData: data,
      };
    default:
      return state;
  }
};
