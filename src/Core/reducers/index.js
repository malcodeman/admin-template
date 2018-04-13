import { combineReducers } from "redux";

import campaigns from "../../Features/Campaigns/reducers/reducers_campaigns";
import orders from "../../Features/Orders/reducers/reducers_orders";
import brands from "../../Features/Brands/reducers/reducers_brands";

const rootReducer = combineReducers({ campaigns, orders, brands });

export default rootReducer;
