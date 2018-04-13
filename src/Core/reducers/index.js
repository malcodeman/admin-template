import { combineReducers } from "redux";

import campaigns from "../../Features/Campaigns/reducers/reducers_campaigns";
import orders from "../../Features/Orders/reducers/reducers_orders";
import brands from "../../Features/Brands/reducers/reducers_brands";
import users from "../../Features/Users/reducers/reducers_users";

const rootReducer = combineReducers({ campaigns, orders, brands, users });

export default rootReducer;
