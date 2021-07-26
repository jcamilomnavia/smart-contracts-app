/* eslint-disable default-case */
import produce from 'immer';
import { signupUser, verifyUser, login } from './actions';

const initialState = {
  loading: false,
  error: null,
  token: null,
  refreshToken: null,
  organizationId: null,
  isLoggedIn: false,
};

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case login.TRIGGER:
    case signupUser.TRIGGER:
    case verifyUser.TRIGGER:
      draft.loading = true;
      draft.error = null;
      break;
    case login.SUCCESS:
      draft.isLoggedIn = true;
      draft.token = payload.accessToken;
      draft.refreshToken = payload.refreshToken;
      draft.organizationId = payload.organizationId;
      break;
    case login.FAILURE:
    case signupUser.FAILURE:
    case verifyUser.FAILURE:
      draft.error = payload;
      break;
    case login.FULFILL:
    case signupUser.FULFILL:
    case verifyUser.FULFILL:
      draft.loading = false;
      break;
  }
}, initialState);

export default reducer;
