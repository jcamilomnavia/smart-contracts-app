import { all, call, spawn } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import navWatch from 'modules/nav/sagas';
// import authWatch from 'modules/auth/sagas';

function* rootSaga() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([
      // external
      call(routinePromiseWatcherSaga),
      // app
      spawn(navWatch),
      // call(authWatch)
    ]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;
