import { combineReducers } from "redux";
import brands from "../Brands/reducers/reducers_brands";

const rootReducer = combineReducers({ brands });

export default rootReducer;