import { call, put, takeLatest } from "redux-saga/effects";

import { getBrands, postBrands, postBrandsImage } from "./api";
import {
  REQUEST_BRANDS,
  RECIVE_BRANDS,
  UPLOAD_BRANDS,
  UPLOAD_BRANDS_SUCCEEDED,
  UPLOAD_BRANDS_FAILED,
  UPLOAD_BRANDS_IMAGE_SUCCEEDED
} from "../actions/actions_brands";

function* fetchBrands() {
  const data = yield call(getBrands);
  yield put({ type: RECIVE_BRANDS, payload: data.data });
}

function* uploadBrands(action) {
  try {
    const data = yield call(postBrands, action.payload.name);
    yield put({ type: UPLOAD_BRANDS_SUCCEEDED, payload: data.data });
    const res = yield call(postBrandsImage, data.data.id, action.payload.logo);
    yield put({
      type: UPLOAD_BRANDS_IMAGE_SUCCEEDED,
      payload: res.data.imagePublicUrl
    });
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
