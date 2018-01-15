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
import { ALL } from '../../redux/constants';

import './App.scss';

class App extends Component {

  isAuthorized(pageRole, stateRole) {
   if (pageRole !== stateRole && pageRole !== ALL) {
      return false;
    } else {
      return true;
    }
  }

  render() {

    const { userRole } = this.props;

    return (
      <Router>
        <div className='app'>
          <Switch>
            {routes.map(({ path, exact, id, component: Component, layout: Layout, role: role }) => (
              <Route key={id} exact={exact} path={path} render={props => (
                this.isAuthorized(role, userRole)?(
                  <Layout>
                    <Component {...props} />
                  </Layout>
                ):(
                  <Redirect to={
                    {
                      pathname: '/login',
                      state: { from: props.location }
                    }
                  } />
                )
              )} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  userRole: PropTypes.string,
};

const mapStateToProps = state => ({
    userRole: state.usersStoreReducer.userRole
});

export default connect(mapStateToProps)(App);
