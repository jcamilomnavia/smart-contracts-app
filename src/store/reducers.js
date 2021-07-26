import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import { reducer as form } from 'redux-form';

import nav from 'modules/nav/reducer';
import auth from 'modules/auth/reducer';

import { authPersistConfig, rootPersistConfig } from './persistor';
import history from './history';

const appReducer = combineReducers({
  // external
  router: connectRouter(history),
  form,

  // app
  auth: persistReducer(authPersistConfig, auth),
  nav,
});

const actions = [];

const rootReducer = (state, action) => {
  if (actions.includes(action.type)) {
    return appReducer({}, action);
  }

  return appReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
