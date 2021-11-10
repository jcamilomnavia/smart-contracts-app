/* eslint-disable no-underscore-dangle */
import getWeb3 from './getWeb3';
import p2Contract from '../contracts/P2.json';

const TruffleSDK = {
  _storageValue: 0,
  _web3: null,
  _accounts: null,
  _contract: null,
  _error: null,

  init: async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = p2Contract.networks[networkId];
      const instance = new web3.eth.Contract(
        p2Contract.abi,
        deployedNetwork && deployedNetwork.address
      );
      TruffleSDK._accounts = accounts;
      TruffleSDK._web3 = web3;
      TruffleSDK._contract = instance;
    } catch (error) {
      TruffleSDK._error = error;
      console.error(error);
    }
  },

  setStorage: (value) => {
    TruffleSDK._storageValue = value;
  },
  getStorage: () => {
    return TruffleSDK._storageValue;
  },

  getError: () => {
    return TruffleSDK._error;
  },

  getWeb3: () => {
    return TruffleSDK._web3;
  },

  runExample: async () => {
    const { accounts, contract } = TruffleSDK;
    await contract.methods.set(5).send({ from: accounts[0] });
    const response = await contract.methods.get().call();
    this.setState({ storageValue: response });
  },

  createTask: async (energy, price) => {
    const { accounts, contract } = TruffleSDK;
    await contract.methods
      .createTask(energy, price)
      .send({ from: accounts[0] });
  },

  findBestBuy: async (id) => {
    const { accounts, contract } = TruffleSDK;
    await contract.methods.findBestBuy(id).send({ from: accounts[0] });
  },
};

export default TruffleSDK;
