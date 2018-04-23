import { call, put, takeLatest } from "redux-saga/effects";

import {
  getCampaigns,
  postCampaigns,
  postCampaignsProductImage,
  postCampaignsGuidelinesImage
} from "./api";
import {
  REQUEST_CAMPAIGNS,
  RECIVE_CAMPAIGNS,
  UPLOAD_CAMPAIGNS,
  UPLOAD_CAMPAIGNS_SUCCEEDED,
  UPLOAD_CAMPAIGNS_FAILED,
  UPLOAD_PRODUCT_IMAGE_SUCCEEDED,
  UPLOAD_GUIDELINES_IMAGE_SUCCEEDED
} from "../actions/actions_campaigns";

function* fetchCampaigns() {
  const data = yield call(getCampaigns);
  yield put({ type: RECIVE_CAMPAIGNS, payload: data.data });
}

function* uploadCampaigns(action) {
  try {
    const campaigns = yield call(postCampaigns, action.payload);
    yield put({ type: UPLOAD_CAMPAIGNS_SUCCEEDED, payload: campaigns.data });
    const productImage = yield call(
      postCampaignsProductImage,
      campaigns.data.guid,
      action.payload.productImage
    );
    yield put({
      type: UPLOAD_PRODUCT_IMAGE_SUCCEEDED,
      payload: productImage.data.imagePublicUrl
    });
    const guidelinesImage = yield call(
      postCampaignsGuidelinesImage,
      campaigns.data.guid,
      action.payload.guidelinesImage
    );
    yield put({
      type: UPLOAD_GUIDELINES_IMAGE_SUCCEEDED,
      payload: guidelinesImage.data.imagePublicUrl
    });
  } catch (error) {
    yield put({ type: UPLOAD_CAMPAIGNS_FAILED, error: error.message });
  }
}

export function* watchFetchCampaigns() {
  yield takeLatest(REQUEST_CAMPAIGNS, fetchCampaigns);
}

export function* watchUploadCampaigns() {
  yield takeLatest(UPLOAD_CAMPAIGNS, uploadCampaigns);
}
