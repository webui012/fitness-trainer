import React from 'react';
import { render } from 'react-dom';
import {App} from 'Components';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/common.scss';

let store = createStore(reducer);

render(
  <App store={store} />,
  document.getElementById('root')
)

