import { call, put, takeLatest } from "redux-saga/effects";

import { getCampaigns } from "./api";
import { REQUEST_CAMPAIGNS } from "../actions/actions_campaigns";
import { RECIVE_CAMPAIGNS } from "../actions/actions_campaigns";

function* fetchCampaigns() {
  const data = yield call(getCampaigns);
  yield put({ type: RECIVE_CAMPAIGNS, payload: data.data });
}

export function* watchFetchCampaigns() {
  yield takeLatest(REQUEST_CAMPAIGNS, fetchCampaigns);
}
