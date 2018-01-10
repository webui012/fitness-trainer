import React from 'react';
import { render } from 'react-dom';
import {App} from 'Components';

import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/middleware';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/common.scss';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
window.store = store
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
