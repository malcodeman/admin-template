import { call, put, takeLatest } from "redux-saga/effects";

import { submitLogin } from "./api";
import {
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_SUCCEEDED,
  SUBMIT_LOGIN_FAILED
} from "../actions/actions_auth";

function* submitAuthLogin(action) {
  try {
    const data = yield call(submitLogin, action.payload);
    localStorage.setItem("token", `Bearer ${data.data.token}`);
    yield put({ type: SUBMIT_LOGIN_SUCCEEDED, payload: data.data });
  } catch (error) {
    yield put({ type: SUBMIT_LOGIN_FAILED, error: error.message });
  }
}

export function* watchsubmitAuthLogin() {
  yield takeLatest(SUBMIT_LOGIN, submitAuthLogin);
}
