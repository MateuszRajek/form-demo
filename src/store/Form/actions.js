import { UPDATE_FORM } from "./actionsType";

export const updateForm = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_FORM,
      payload: { data },
    });
  };
};
