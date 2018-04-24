import { combineReducers } from "redux";

import auth from "../../Features/Auth/reducers/reducers_auth";
import campaigns from "../../Features/Campaigns/reducers/reducers_campaigns";
import orders from "../../Features/Orders/reducers/reducers_orders";
import brands from "../../Features/Brands/reducers/reducers_brands";
import users from "../../Features/Users/reducers/reducers_users";

const rootReducer = combineReducers({ auth, campaigns, orders, brands, users });

export default rootReducer;
