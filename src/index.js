import React from 'react';
import { render } from 'react-dom'
import './index.css';
import Root from './Root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
