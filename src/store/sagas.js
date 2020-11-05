import { all, call } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';

function* rootSaga() {
  // eslint-disable-next-line no-useless-catch
  try {
    yield all([
      // external
      call(routinePromiseWatcherSaga),
    ]);
  } catch (error) {
    throw error;
  }
}

export default rootSaga;
