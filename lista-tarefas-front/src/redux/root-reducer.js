import { combineReducers } from "redux";
import resumoReducer from "./resumo/reducer";

const rootReducer = combineReducers({ resumoReducer });

export default rootReducer;