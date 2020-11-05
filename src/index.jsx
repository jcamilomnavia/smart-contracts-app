import React from 'react';
import { render, hydrate } from 'react-dom';
import Loadable from 'react-loadable';

import App from './app';

const renderMethod = module.hot ? render : hydrate;

Loadable.preloadReady().then(() => {
  renderMethod(<App />, document.getElementById('root'));
});
