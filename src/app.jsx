import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import SdkLoader from 'views/components/sdk-loader';

import Routes from 'routes';
import routesConfig from 'routes/config';
import { store, persistor } from 'store';
import history from 'store/history';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SdkLoader>
        <h1>Hello</h1>
        <ConnectedRouter history={history}>
          <Routes store={store} routes={routesConfig} />
        </ConnectedRouter>
      </SdkLoader>
    </PersistGate>
  </Provider>
);

export default App;
