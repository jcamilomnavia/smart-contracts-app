import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import Routes from 'routes';
import routesConfig from 'routes/config';
import { store, persistor } from 'store';
import history from 'store/history';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Routes store={store} routes={routesConfig} />
        </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
