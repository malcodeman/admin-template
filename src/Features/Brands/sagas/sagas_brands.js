import { call, put, takeLatest } from "redux-saga/effects";

import { getBrands, postBrands } from "./api";
import {
  REQUEST_BRANDS,
  RECIVE_BRANDS,
  UPLOAD_BRANDS,
  UPLOAD_BRANDS_SUCCEEDED,
  UPLOAD_BRANDS_FAILED
} from "../actions/actions_brands";

function* fetchBrands() {
  const data = yield call(getBrands);
  yield put({ type: RECIVE_BRANDS, payload: data.data });
}

function* uploadBrands(action) {
  try {
    const data = yield call(postBrands, action.payload);
    // WARNING: payload should be response from server.
    yield put({ type: UPLOAD_BRANDS_SUCCEEDED, payload: action.payload });
  } catch (error) {
    yield put({ type: UPLOAD_BRANDS_FAILED, error: error.message });
  }
}

export function* watchFetchBrands() {
  yield takeLatest(REQUEST_BRANDS, fetchBrands);
}

export function* watchUploadBrands() {
  yield takeLatest(UPLOAD_BRANDS, uploadBrands);
}
