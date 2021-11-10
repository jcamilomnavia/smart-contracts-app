/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import Swagger from 'swagger-client';

const { REACT_APP_URL_SPEC, REACT_APP_API_BASE_URL } = process.env;

const SDK = {
  _api: null,
  _fetch: window.fetch,
  _token: false,
  _error: null,
  setToken: (token) => {
    SDK._token = token;
  },
  getError: (error) => {
    SDK._error = error;
  },
  getApi: () => {
    if (SDK._api) return SDK._api;
    throw new Error('SDK is not initialized.');
  },
  init: async () => {
    if (SDK._api) {
      return false;
    }

    try {
      Swagger.prototype.execute = (...args) =>
        Swagger.execute.apply(this, args).catch((error) => {
          throw SDK._buildError(error);
        });

      const client = await new Swagger({
        url: REACT_APP_URL_SPEC,
        usePromise: true,
        requestInterceptor: SDK._requestInteceptor,
        userFetch: SDK._fetch,
        skipNormalization: true,
      });

      client.spec.servers[0] = { url: REACT_APP_API_BASE_URL };

      SDK._api = client.apis;

      return client;
    } catch (err) {
      SDK._error = err;
      return false;
    }
  },

  _requestInteceptor: (req) => {
    if (SDK._token) {
      req.headers.Authorization = `Bearer ${SDK._token}`;
      req.headers['X-ORGANIZATION'] = `${SDK._organization}`;
    } else {
      delete req.headers.Authorization;
      delete req.headers['X-ORGANIZATION'];
    }
  },

  _buildError: (err) => {
    if (!err || !err.response) {
      const message = ['Service not available. Please try again.'];
      Object.assign(err, { errorMessages: message });
    } else if (
      err.response.status === 408 ||
      err.response.status === 'ECONNABORTED'
    ) {
      const message = ['The service timed out. Please try again.'];
      Object.assign(err, { errorMessages: message });
    } else if (
      err.response.body &&
      !err.response.ok &&
      err.response.status !== 401
    ) {
      Object.assign(err, {
        errorMessages: err.response.body.errors || [],
      });
    } else {
      Object.assign(err, { errorMessages: [] });
    }
    return err;
  },
};

export default SDK;
