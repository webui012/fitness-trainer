import React from 'react';
import { render } from 'react-dom';
import {App} from 'Components';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/common.scss';

let store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
