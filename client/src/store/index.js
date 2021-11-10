import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import history from './history';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

const store = createStore(reducers, composeEnhancers(...enhancers));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
