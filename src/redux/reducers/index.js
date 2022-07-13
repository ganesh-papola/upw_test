import { combineReducers } from "redux";
import CommonReducer from "./common";
import AuthReducer from "./auth";

const RootReducer = combineReducers({
  common: CommonReducer,
  auth: AuthReducer,
});

export default RootReducer;
