import React, {Component} from 'react';
import { Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import routes from './routes';
import isAuthorized from '../../utils/isAuthorized';

// Routes
import GuestRoute from '../../routes/GuestRoute';

// Layouts
import MainLayout from '../../layouts/MainLayout';
import LoginLayout from '../../layouts/LoginLayout';

import {
  Homepage,
  SignupPage,
  LoginPage,
} from 'Pages';

import './App.scss';

const App = props => (
  <div className='app'>
    <Switch>
      <GuestRoute exact="exact" path="/" layout={MainLayout} component={Homepage}/>
      <GuestRoute path="/login" layout={LoginLayout} component={LoginPage}/>
      <GuestRoute path="/signup" layout={LoginLayout} component={SignupPage}/>
    </Switch>
  </div>
)

export default App;
