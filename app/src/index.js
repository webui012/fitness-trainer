import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import {App} from 'Components';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
=======
import {App} from 'Containers';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/middleware';
>>>>>>> 35eee0e83a5dab622cf7756ab4b99d0460ff42ee
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/common.scss';

<<<<<<< HEAD
let store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
=======
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware),);
sagaMiddleware.run(rootSaga);
>>>>>>> 35eee0e83a5dab622cf7756ab4b99d0460ff42ee

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
