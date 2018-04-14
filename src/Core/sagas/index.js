import { all } from "redux-saga/effects";

import { watchFetchCampaigns } from "../../Features/Campaigns/sagas/sagas_campaigns";
import { watchFetchOrders } from "../../Features/Orders/sagas/sagas_orders";
import {
  watchFetchBrands,
  watchUploadBrands
} from "../../Features/Brands/sagas/sagas_brands";
import { watchFetchUsers } from "../../Features/Users/sagas/sagas_users";

export default function* rootSaga() {
  yield all([
    watchFetchCampaigns(),
    watchFetchOrders(),
    watchFetchBrands(),
    watchUploadBrands(),
    watchFetchUsers()
  ]);
}
