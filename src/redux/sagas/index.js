import { all, fork } from "redux-saga/effects";
import AuthSaga from "./auth";
import DashboardSaga from "./dashboard";

function* RootSaga() {
  yield all([
    fork(DashboardSaga),
    fork(AuthSaga)
  ]);
}

export default RootSaga;
