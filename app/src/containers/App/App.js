import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from './routes';
import isAuthorized from '../../utils/isAuthorized';

import './App.scss';

const App = props => {

  const { userRole } = props;

  return (
    <Router>
      <div className='app'>
        <Switch>
          {routes.map(({ path, exact, id, page: Component, layout: Layout, role: role }) => (
            <Route key={id} exact={exact} path={path} render={props => (
              isAuthorized(role, userRole) ? (
                <Layout>
                  <Component {...props} />
                </Layout>
              ) : (
                <Redirect to={
                  {
                    pathname: '/login',
                    state: { from: props.location },
                  }
                } />
              )
            )} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  userRole: PropTypes.string,
};

const mapStateToProps = state => ({
  userRole: state.usersStoreReducer.userRole,
});

export default connect(mapStateToProps)(App);
