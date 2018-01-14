import React from 'react';
import { render } from 'react-dom';
import { App } from 'Containers';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/middleware';

import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/common.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware, thunk));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
