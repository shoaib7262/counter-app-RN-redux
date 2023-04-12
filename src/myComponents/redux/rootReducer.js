import { counter } from "./reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    counter:counter
})