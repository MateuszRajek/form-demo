import { combineReducers, createStore, applyMiddleware } from "redux";
import { default as formReducer } from "./Form";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const initialState = {};

const rootPersistedReducer = combineReducers({
  form: formReducer,
});

const rootReducer = (state, action) => {
  return rootPersistedReducer(state, action);
};

const middlewares = [thunk];
middlewares.push(logger);

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;
