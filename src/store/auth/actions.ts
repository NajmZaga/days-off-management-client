import { IErrors, ILoginCredentials, IAuthSuccess } from "../../utils/types";
import {
	IAuthMakeLoginAction,
	IAuthMakeLoginSuccessAction,
	IAuthMakeLoginErrorAction,
	AUTH_MAKE_LOGIN,
	AUTH_MAKE_LOGIN_SUCCESS,
	AUTH_MAKE_LOGIN_ERROR,
	IAuthSetLoggedInAction,
	AUTH_SET_LOGGED_IN,
	IAuthLogoutAction,
	AUTH_LOGOUT,
} from "./types";

/**
 * Login actions
 */
export const authLogin = (
	credentials: ILoginCredentials
): IAuthMakeLoginAction => ({
	type: AUTH_MAKE_LOGIN,
	payload: credentials,
});

export const authLoginSuccess = (
	authSuccess: IAuthSuccess
): IAuthMakeLoginSuccessAction => ({
	type: AUTH_MAKE_LOGIN_SUCCESS,
	payload: authSuccess,
});

export const authLoginError = (errors: IErrors): IAuthMakeLoginErrorAction => ({
	type: AUTH_MAKE_LOGIN_ERROR,
	payload: errors,
});

/**
 * Set is loggedIn actions
 */
export const authSetLoggedIn = (
	isLoggedIn: boolean
): IAuthSetLoggedInAction => ({
	type: AUTH_SET_LOGGED_IN,
	payload: isLoggedIn,
});

/**
 * Logout actions
 */
export const authLogout = (): IAuthLogoutAction => ({
	type: AUTH_LOGOUT,
});
