import {
  SUBMIT_LOGIN_SUCCEEDED,
  SUBMIT_LOGIN_FAILED,
  LOGGED_IN
} from "../actions/actions_auth";

const initialState = {
  authLoginFailed: false,
  authLoginSucceeded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_LOGIN_SUCCEEDED:
      return {
        ...state,
        authLoginSucceeded: true
      };
    case SUBMIT_LOGIN_FAILED:
      return {
        ...state,
        authLoginFailed: true
      };
    case LOGGED_IN:
      return {
        ...state,
        // Reset state
        authLoginSucceeded: false,
        authLoginFailed: false
      };
    default:
      return state;
  }
};
