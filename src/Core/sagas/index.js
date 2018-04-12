import { all } from "redux-saga/effects";

import { watchFetchBrands } from "../../Features/Brands/sagas/sagas_brands";

export default function* rootSaga() {
  yield all([watchFetchBrands()]);
}
