import { Action } from "redux";
import { IErrors, ILoginCredentials, IAuthSuccess } from "../../utils/types";

export interface IAuth {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  rememberMe: boolean;
  errors: IErrors | null;
}

/**
 * Make login
 */
export const AUTH_MAKE_LOGIN = 'AUTH_MAKE_LOGIN';
export type AUTH_MAKE_LOGIN = typeof AUTH_MAKE_LOGIN;

export const AUTH_MAKE_LOGIN_SUCCESS = 'AUTH_MAKE_LOGIN_SUCCESS';
export type AUTH_MAKE_LOGIN_SUCCESS = typeof AUTH_MAKE_LOGIN_SUCCESS;

export const AUTH_MAKE_LOGIN_ERROR = 'AUTH_MAKE_LOGIN_ERROR';
export type AUTH_MAKE_LOGIN_ERROR = typeof AUTH_MAKE_LOGIN_ERROR;

export interface IAuthMakeLoginAction extends Action<AUTH_MAKE_LOGIN> {
  payload: ILoginCredentials;
}

export interface IAuthMakeLoginSuccessAction extends Action<AUTH_MAKE_LOGIN_SUCCESS> {
  payload: IAuthSuccess;
}

export interface IAuthMakeLoginErrorAction extends Action<AUTH_MAKE_LOGIN_ERROR> {
  payload: IErrors;
}

/**
 * Auth set is loggedin
 */
export const AUTH_SET_LOGGED_IN = 'AUTH_SET_LOGGED_IN';
export type AUTH_SET_LOGGED_IN = typeof AUTH_SET_LOGGED_IN;

export interface IAuthSetLoggedInAction extends Action<AUTH_SET_LOGGED_IN> {
  payload: boolean;
}

/**
 * Auth Logout types
 */
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export type AUTH_LOGOUT = typeof AUTH_LOGOUT;

/**
 * Auth logout action creators
 */
export interface IAuthLogoutAction extends Action<AUTH_LOGOUT> {}

export type AuthActionType = IAuthMakeLoginAction
| IAuthMakeLoginSuccessAction
| IAuthMakeLoginErrorAction
| IAuthSetLoggedInAction
| IAuthLogoutAction;