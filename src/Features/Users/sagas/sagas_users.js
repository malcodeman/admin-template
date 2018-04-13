import { call, put, takeLatest } from "redux-saga/effects";

import { getUsers } from "./api";
import { REQUEST_USERS } from "../actions/actions_users";
import { RECIVE_USERS } from "../actions/actions_users";

function* fetchUsers() {
  const data = yield call(getUsers);
  yield put({ type: RECIVE_USERS, payload: data.data });
}

export function* watchFetchUsers() {
  yield takeLatest(REQUEST_USERS, fetchUsers);
}
