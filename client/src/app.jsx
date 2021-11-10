import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import Routes from 'routes';
import routesConfig from 'routes/config';
import { store, persistor } from 'store';
import history from 'store/history';
import TruffleSDK from 'utils/truffle-sdk';
import SdkLoader from 'views/components/sdk-loader';

class App extends Component {
  componentDidMount = async () => {
    await TruffleSDK.init();
  };

  render() {
    if (!TruffleSDK.getWeb3()) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Provider store={store}>
        <div>The stored value is: {TruffleSDK.getStorage()}</div>

        <PersistGate loading={null} persistor={persistor}>
          <SdkLoader>
            <ConnectedRouter history={history}>
              <Routes store={store} routes={routesConfig} />
            </ConnectedRouter>
          </SdkLoader>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
