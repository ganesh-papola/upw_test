import { REHYDRATE } from "redux-persist";
import { ACTION_TYPES } from "../actions";

const initialState = {
  accessToken: "",
  user: {},
  error: "",
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
      case ACTION_TYPES.UPDATE_AUTH_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
        error: {}
      };
      case ACTION_TYPES.UPDATE_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
        error: {}
      };
      case ACTION_TYPES.SIGNIN_FAILED:
      return {
        ...state,
        accessToken: "",
        user: {},
        error: action.payload
      };
      case ACTION_TYPES.SIGN_OUT:
        return {
            ...initialState
        };
      case REHYDRATE:
      return {
        ...initialState,
        ...((action.payload || {}).auth || {}),
        loading: false,
      };
      default:
        return {
          ...state,
        };
    }
}