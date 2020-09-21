import { IErrors, ILoginCredentials } from "../../utils/types";
import {
	IAuthMakeLoginAction,
	IAuthMakeLoginSuccessAction,
	IAuthMakeLoginErrorAction,
	AUTH_MAKE_LOGIN,
	AUTH_MAKE_LOGIN_SUCCESS,
	AUTH_MAKE_LOGIN_ERROR,
  IAuthSetLoggedInAction,
  AUTH_SET_LOGGED_IN,
} from "./types";

/**
 * Login actions
 */
export const authLogin = (credentials: ILoginCredentials): IAuthMakeLoginAction => ({
	type: AUTH_MAKE_LOGIN,
	payload: credentials,
});

export const authLoginSuccess = (token: string): IAuthMakeLoginSuccessAction => ({
	type: AUTH_MAKE_LOGIN_SUCCESS,
	payload: token,
});

export const authLoginError = (errors: IErrors): IAuthMakeLoginErrorAction => ({
	type: AUTH_MAKE_LOGIN_ERROR,
	payload: errors,
});

/**
 * Set is loggedIn actions
 */
export const authSetLoggedIn = (isLoggedIn: boolean): IAuthSetLoggedInAction => ({
  type: AUTH_SET_LOGGED_IN,
  payload: isLoggedIn,
});
