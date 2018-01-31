import React from 'react';
import { render } from 'react-dom';
import { Router } from "react-router-dom";
import { App } from 'Containers';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/middleware';
import { LOGIN_SUCCEEDED } from './redux/constants';

import history from './history';
import decode from "jwt-decode";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

import './styles/reset.scss';
import './styles/common.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware, thunk));
sagaMiddleware.run(rootSaga);

// Authorization
if (localStorage.JWT) {
  const payload = decode(localStorage.JWT);

  const user = {
    email: payload.email,
    isAdmin: payload.isAdmin,
    token: localStorage.JWT
  };

  setAuthorizationHeader(localStorage.JWT);

  store.dispatch({
    type: LOGIN_SUCCEEDED,
    isLoading: false,
    user
  });
}

render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
