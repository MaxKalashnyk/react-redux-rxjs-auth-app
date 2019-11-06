export const FETCH_LOGIN = "FETCH_LOGIN";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";

export const fetchLogin = (email, password) => ({
  type: FETCH_LOGIN,
  payload: {
    email,
    password
  }
});

export const fetchLoginSuccess = data => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: {
    tokens: data.response.data
  }
});

export const fetchLoginFailure = message => ({
  type: FETCH_LOGIN_FAILURE,
  payload: message
});
