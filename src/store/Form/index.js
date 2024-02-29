import { UPDATE_FORM } from "./actionsType";

const initialState = {
  form: "test",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        form: action.payload.data,
      };
    default:
      return state;
  }
};
