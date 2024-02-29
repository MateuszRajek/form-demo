const initialState = {
  form: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STORE":
      return {
        ...state,
        form: action.payload.data,
      };
    default:
      return state;
  }
};
