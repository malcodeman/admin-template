import { all } from "redux-saga/effects";

import {
  watchFetchCampaigns,
  watchUploadCampaigns
} from "../../Features/Campaigns/sagas/sagas_campaigns";
import {
  watchFetchOrders,
  watchUpdateOrdersStatus
} from "../../Features/Orders/sagas/sagas_orders";
import {
  watchFetchBrands,
  watchUploadBrands
} from "../../Features/Brands/sagas/sagas_brands";
import { watchFetchUsers } from "../../Features/Users/sagas/sagas_users";

import { watchsubmitAuthLogin } from "../../Features/Auth/sagas/sagas_auth";

export default function* rootSaga() {
  yield all([
    watchsubmitAuthLogin(),
    watchFetchCampaigns(),
    watchUploadCampaigns(),
    watchFetchOrders(),
    watchUpdateOrdersStatus(),
    watchFetchBrands(),
    watchUploadBrands(),
    watchFetchUsers()
  ]);
}
