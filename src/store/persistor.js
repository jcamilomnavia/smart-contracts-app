import storageSession from 'redux-persist/lib/storage/session';
import localForage from 'localforage';

const isDebug = process.env.NODE_ENV !== 'production';

localForage.config({
  name: 'Eeact bBoilerplate',
  storeName: 'react-boilerplate',
});

export const rootPersistConfig = {
  key: 'root',
  storage: localForage,
  debug: isDebug,
  whitelist: [],
};

export const authPersistConfig = {
  key: 'auth',
  storage: storageSession,
  debug: isDebug,
  blacklist: ['auth'],
};
