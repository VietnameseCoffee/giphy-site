import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/normalize.css';
import Root from './root';
import * as serviceWorker from './serviceWorker';

import store from './store/store';

// Dev

document.addEventListener('DOMContentLoaded', () => {
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
