import { Store } from 'redux';

import { GlobalState } from '..';
import { isValidToken } from '../../utils/jwt-utils';

import { authSetLoggedIn } from './actions';

export const manageToken = (store: Store<GlobalState>) => () => {
  const { token, isLoggedIn } = store.getState().authorization;

  const tokenIsValid = isValidToken(token);
  console.log(tokenIsValid);
  if (tokenIsValid !== isLoggedIn) {
    console.log(tokenIsValid, isLoggedIn);
    
    token ? localStorage.setItem('token', token) : localStorage.removeItem('token');
    store.dispatch(authSetLoggedIn(tokenIsValid));
  } else console.log("else");
};