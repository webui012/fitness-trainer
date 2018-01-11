import React from 'react';
import { render } from 'react-dom';
import {App} from 'Components';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/common.scss';

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.storee = store; // to check the store value

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
