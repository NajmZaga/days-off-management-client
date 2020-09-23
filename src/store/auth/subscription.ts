import { Store } from "redux";

import { GlobalState } from "..";
import { isValidToken } from "../../utils/jwt-utils";

import { authSetLoggedIn } from "./actions";

export const manageToken = (store: Store<GlobalState>) => () => {
	const { token, isLoggedIn, rememberMe } = store.getState().authorization;

	const tokenIsValid = isValidToken(token);
	if (tokenIsValid !== isLoggedIn) {
		token
			? rememberMe
				? localStorage.setItem("token", token)
				: sessionStorage.setItem("token", token)
			: rememberMe
			? localStorage.removeItem("token")
			: sessionStorage.removeItem("token");
		store.dispatch(authSetLoggedIn(tokenIsValid));
	}
};
