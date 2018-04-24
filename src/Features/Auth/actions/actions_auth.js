export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SUBMIT_LOGIN_SUCCEEDED = "SUBMIT_LOGIN_SUCCEEDED";
export const SUBMIT_LOGIN_FAILED = "SUBMIT_LOGIN_FAILED";
export const LOGGED_IN = "LOGGED_IN";

export const submitLogin = loginData => {
  return {
    type: SUBMIT_LOGIN,
    payload: loginData
  };
};

export const loggedIn = () => {
  return {
    type: LOGGED_IN
  };
};
