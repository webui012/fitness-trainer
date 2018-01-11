
import React from 'react';
import { render } from 'react-dom';
import {App} from 'Components';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/common.scss';

const store = createStore(reducer);
window.s = store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
