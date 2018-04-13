import { all } from "redux-saga/effects";

import { watchFetchCampaigns } from "../../Features/Campaigns/sagas/sagas_campaigns";
import { watchFetchOrders } from "../../Features/Orders/sagas/sagas_orders";
import { watchFetchBrands } from "../../Features/Brands/sagas/sagas_brands";

export default function* rootSaga() {
  yield all([watchFetchCampaigns(), watchFetchOrders(), watchFetchBrands()]);
}
