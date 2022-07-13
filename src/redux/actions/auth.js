import { ACTION_TYPES } from "./actionTypes";

export const signIn = (payload) => {
  return {
    type: ACTION_TYPES.SIGN_IN,
    payload,
  };
};
export const clearError = () => {
  return {
    type: ACTION_TYPES.CLEAR_ERROR
  };
};


export const signOut = () => {
  return {
    type: ACTION_TYPES.SIGN_OUT
  };
};

export const updateAuthTokenRedux = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_AUTH_TOKEN,
    payload,
  };
};

export const updateUserDetailsRedux = (payload) => {
  return {
    type: ACTION_TYPES.UPDATE_USER_DETAILS,
    payload,
  };
};
export const signInFailed = (payload) => {
  return {
    type: ACTION_TYPES.SIGNIN_FAILED,
    payload,
  };
}
