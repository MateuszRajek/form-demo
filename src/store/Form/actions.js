export const updateForm = (data) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_FORM",
      payload: { data },
    });
  };
};
