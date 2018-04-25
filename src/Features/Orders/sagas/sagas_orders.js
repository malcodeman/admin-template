import { call, put, takeLatest } from "redux-saga/effects";

import { getOrders, putOrdersStatus } from "./api";
import {
  REQUEST_ORDERS,
  RECIVE_ORDERS,
  UPDATE_ORDERS_STATUS,
  UPDATE_ORDERS_STATUS_SUCCEEDED,
  UPDATE_ORDERS_STATUS_FAILED
} from "../actions/actions_orders";

function* fetchOrders() {
  const data = yield call(getOrders);
  yield put({ type: RECIVE_ORDERS, payload: data.data });
}

function* updateOrdersStatus(action) {
  try {
    const data = yield call(putOrdersStatus, action.payload);
    yield put({ type: UPDATE_ORDERS_STATUS_SUCCEEDED, payload: data.data });
  } catch (error) {
    yield put({ type: UPDATE_ORDERS_STATUS_FAILED, payload: error.message });
  }
}

export function* watchFetchOrders() {
  yield takeLatest(REQUEST_ORDERS, fetchOrders);
}

export function* watchUpdateOrdersStatus() {
  yield takeLatest(UPDATE_ORDERS_STATUS, updateOrdersStatus);
}
