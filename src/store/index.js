import { createStore } from "redux";

const initialState = {
  form: {},
};

const formReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(formReducer, initialState);

export default store;
