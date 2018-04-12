import { call, put, takeLatest } from "redux-saga/effects";

import { getBrands } from "./api";
import { REQUEST_BRANDS } from "../actions/actions_brands";
import { RECIVE_BRANDS } from "../actions/actions_brands";

function* fetchBrands() {
  const data = yield call(getBrands);
  yield put({ type: RECIVE_BRANDS, payload: data.data });
}

export function* watchFetchBrands() {
  yield takeLatest(REQUEST_BRANDS, fetchBrands);
}
