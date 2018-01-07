import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Homepage,
  About,
  Services,
  Sales,
  Online,
  Forum,
  Contacts,
  LoginPage,
  SignupPage,
  Nutrition,
  TrainingPlanSection,
  UserCabinet,
  AdminCabinet
} from 'Pages';
import routes from './routes';
//import isAuthorized from '../../utils/isAuthorized';
import './App.scss';

import MainLayout from '../../layouts/MainLayout';
import AdminLayout from '../../layouts/AdminLayout';


class App extends Component {

  isAuthorized(pageRole, stateRole){
   if (pageRole !== stateRole && pageRole !== 'ALL'){
      return false
    } else {
      return true
    }
  }

  render(){
    const { userRole } = this.props;
    return (
      <Router>
        <div className='app'>
          <Switch>
            {routes.map(({path, exact, component: Component, layout: Layout, role: role}) => (
              <Route exact={exact} path={path} render={props => (
                this.isAuthorized(role, userRole)?(
                  <Layout>
                    <Component {...props} />
                  </Layout>
                ):(
                  <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }} />
                )
              )} />
            ))}
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    userRole: state.login.userRole
  }
}

export default connect(mapStateToProps)(App);

/*
<Route path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route path='/services/online-training' component={Online} />
            <Route path='/services/training-plan' component={TrainingPlanSection} />
            <Route path='/services/nutrition-plan' component={Nutrition} />
            <Route path='/sales' component={Sales} />
            <Route path='/forum' component={Forum} />
            <Route path='/contacts' component={Contacts} />
            */
