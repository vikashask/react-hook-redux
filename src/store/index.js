import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import initialState from "./initial-state";
import rootReducer from "./reducers/root.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
