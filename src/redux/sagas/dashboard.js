//effects
import { all, put, takeLatest } from "redux-saga/effects";

//services
import { getRequest, postRequest } from "src/shared/services";

//constants
import { API, RESPONSE, WARNINGS } from "src/shared/constants";

//actions
import {
  ACTION_TYPES,
  startLoading,
  stopLoading,
} from "../actions";

function* getInventoryData({
  payload: { payload = {}, success = () => {}, fail = () => {} } = {},
}) {
  try {
    yield put(startLoading());

    const { data = [] } = yield getRequest({
      API: API.GetInventory,
    });
    success(data);
    if (data.statusCode === RESPONSE.unAuthorized) {
      fail(data.msg);
    } else {
      fail(data.msg);
    }
  } catch (error) {
    fail(WARNINGS.ERROR);
  } finally {
    yield put(stopLoading());
  }
}


function* DashboardSaga() {
  yield all([
    // takeLatest(ACTION_TYPES.GET_INVENTORY_DATA, getInventoryData),
  ]);
}

export default DashboardSaga;
