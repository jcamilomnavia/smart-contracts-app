import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import SdkLoader from 'views/components/sdk-loader';
import getWeb3 from './getWeb3';
import SimpleStorageContract from './contracts/SimpleStorage.json';

import Routes from 'routes';
import routesConfig from 'routes/config';
import { store, persistor } from 'store';
import history from 'store/history';

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address
      );
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
    await contract.methods.set(5).send({ from: accounts[0] });
    const response = await contract.methods.get().call();
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Provider store={store}>
        <div>The stored value is: {this.state.storageValue}</div>

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
