import storageSession from 'redux-persist/lib/storage/session';
import localForage from 'localforage';

const isDebug = process.env.NODE_ENV !== 'production';

localForage.config({
  name: 'FA - Real State',
  storeName: 'fa-real-state',
});

export const rootPersistConfig = {
  key: 'root',
  storage: localForage,
  debug: isDebug,
  whitelist: ['me'],
};

export const authPersistConfig = {
  key: 'auth',
  storage: storageSession,
  debug: isDebug,
  blacklist: ['auth'],
};
