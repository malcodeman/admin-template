import { combineReducers } from "redux";

import campaigns from "../../Features/Campaigns/reducers/reducers_campaigns";
import brands from "../../Features/Brands/reducers/reducers_brands";

const rootReducer = combineReducers({ campaigns, brands });

export default rootReducer;
