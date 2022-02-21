import { combineReducers } from "redux";
import homePageReducer from "../reducers/homePage.reducer";

const rootReducerData = combineReducers({
  homePage: homePageReducer,
});

export default rootReducerData;
