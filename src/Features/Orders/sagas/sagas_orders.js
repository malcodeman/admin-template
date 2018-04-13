import { call, put, takeLatest } from "redux-saga/effects";

import { getOrders } from "./api";
import { REQUEST_ORDERS } from "../actions/actions_orders";
import { RECIVE_ORDERS } from "../actions/actions_orders";

function* fetchOrders() {
  const data = yield call(getOrders);
  yield put({ type: RECIVE_ORDERS, payload: data.data });
}

export function* watchFetchOrders() {
  yield takeLatest(REQUEST_ORDERS, fetchOrders);
}
