//effects
import { all, delay, put, takeLatest } from "redux-saga/effects";

//services
import {
  postRequest,
  postRequestNoAuth,
  putRequest,
  updateAuthToken,
} from "src/shared/services";

//constants
import { API, RESPONSE, STRINGS, WARNINGS } from "src/shared/constants";

//actions
import {
  ACTION_TYPES,
  clearError,
  signInFailed,
  startLoading,
  stopLoading,
  updateAuthTokenRedux,
  updateUserDetailsRedux,
} from "../actions";

function* checkStaticLoginCreds({ Username = "", Password = "" }) {
  yield delay(2000)
  if (Username === "upworkTest" && Password === "2022") {
    return {
      statusCode: 200,
      data: {
        accessToken: "123456789",
        msg: "Login Successful",
        user: {
          id: "123456789",
          name: "upworkTest",
          email: "fakeEmail@email.com"
        }
      }
    }
  } else {
    return {
      statusCode: 400,
      data: {
        msg: WARNINGS.INVALID_USERNAME_PASSWORD
      }
    }
  }
}

function* signInSaga({
  payload: { payload = {}, success = () => { }, fail = () => { } } = {},
}) {
  try {
    yield put(clearError());
    yield put(startLoading());
    const { data = {}, statusCode=200} = yield checkStaticLoginCreds(payload);
    if (data && data.accessToken) {
      updateAuthToken(data.accessToken);
      yield put(updateAuthTokenRedux(data.accessToken));
      yield put(updateUserDetailsRedux(data.user));
      success(data.msg);
    } else {
      fail(data.msg);
      yield put (signInFailed({...data, statusCode}));
    }
  } catch (error) {
    fail(WARNINGS.ERROR);
  } finally {
    yield put(stopLoading());
  }
}


function* AuthSaga() {
  yield all([
    takeLatest(ACTION_TYPES.SIGN_IN, signInSaga),
  ]);
}

export default AuthSaga;
