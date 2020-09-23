import { takeLatest, put } from "redux-saga/effects";
import { AUTH_MAKE_LOGIN, IAuthMakeLoginAction } from "./types";
import { loginRequest } from "../../api/auth-requests";
import { authLoginSuccess } from "./actions";

/**
 * Login
 */
function* makeLogin({payload: credentials}: IAuthMakeLoginAction) {
  try {
    const res = yield loginRequest({
      email: credentials.email,
      password: credentials.password,
    });
    yield put(authLoginSuccess({
      token: res.data.token,
      remember: credentials.remember,
    }));
  } catch (error) {
    console.error(error);
  }
}

export function* watchMakeLogin() {
  yield takeLatest(AUTH_MAKE_LOGIN, makeLogin);
}