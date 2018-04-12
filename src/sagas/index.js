import { all } from "redux-saga/effects";

import { watchFetchBrands } from "../Brands/sagas/sagas_brands";

export default function* rootSaga() {
  yield all([watchFetchBrands()]);
}
