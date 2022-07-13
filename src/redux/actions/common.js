import { ACTION_TYPES } from "./actionTypes";

export const startLoading = () => {
  return {
    type: ACTION_TYPES.START_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: ACTION_TYPES.STOP_LOADING,
  };
};



