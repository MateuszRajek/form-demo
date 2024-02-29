import { combineReducers, createStore } from "redux";
import { default as formReducer } from "./Form";

const initialState = {};

const rootPersistedReducer = combineReducers({
  form: formReducer,
});

const rootReducer = (state, action) => {
  return rootPersistedReducer(state, action);
};

const store = createStore(rootReducer, initialState);

export default store;
