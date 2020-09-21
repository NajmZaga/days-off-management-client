import { IAuth, AuthActionType, AUTH_MAKE_LOGIN, AUTH_MAKE_LOGIN_SUCCESS, AUTH_MAKE_LOGIN_ERROR, AUTH_SET_LOGGED_IN } from "./types";
import { isValidToken } from "../../utils/jwt-utils";
import { Reducer } from "redux";

const token = localStorage.getItem('token');
const tokenIsValid = isValidToken(token);

const initialState: IAuth = {
  token: null,
  isLoggedIn: tokenIsValid,
  isLoading: false,
  errors: null,
}

export const authReducer: Reducer<typeof initialState, AuthActionType> = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_MAKE_LOGIN:
      return { ...state, isLoading: true, errors: null };

    case AUTH_MAKE_LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: action.payload };

    case AUTH_MAKE_LOGIN_ERROR:
      return { ...state, isLoading: false, errors: action.payload };

    case AUTH_SET_LOGGED_IN:
      console.log(action.payload);
      return { ...state, isLoggedIn: action.payload };
  
    default:
      return state;
  }
}