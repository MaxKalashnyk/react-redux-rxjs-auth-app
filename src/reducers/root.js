import {
  FETCH_LOGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE
} from "../actions";

const tokensObject = localStorage.getItem("tokens")
  ? JSON.parse(localStorage.getItem("tokens"))
  : null;

const initialState = {
  isLoading: false,
  error: false,
  tokens: tokensObject
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_LOGIN_SUCCESS:
      localStorage.setItem("tokens", JSON.stringify(action.payload.tokens));
      return {
        tokens: action.payload.tokens,
        isLoading: false,
        error: null
      };
    case FETCH_LOGIN_FAILURE:
      return {
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
