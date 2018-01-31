import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import {
  getAuthenticationStatus,
  getAdminStatus
} from '../redux/reducers/auth';

const UserRoute = (
  { isAuthenticated,
    isAdmin,
    component: Component,
    layout: Layout,
    ...rest
  }
) => (
  <Route {...rest} render={ props =>
    isAuthenticated && !isAdmin ?
      <Layout>
        <Component {...props} />
      </Layout>
      : <Redirect to="/login" />}
  />
);

const mapStateToProps = state => ({
    isAuthenticated: getAuthenticationStatus(state),
    isAdmin: getAdminStatus(state)
});

const mapDispatchToProps = {
  getAuthenticationStatus,
  getAdminStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRoute);