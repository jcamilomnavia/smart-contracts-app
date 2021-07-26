import { createSelector } from 'reselect';

export const getAuth = (state) => state.auth;
export const authIsLoggedIn = createSelector(
  getAuth,
  (auth) => auth.isLoggedIn
);
export const getAuthToken = createSelector(getAuth, (auth) => auth.token);
export const getError = createSelector(getAuth, (auth) => auth.error);
