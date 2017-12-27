import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

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
  Cabinet
} from 'Pages';

import './App.scss';
import MainLayout from '../../layouts/MainLayout';
import AdminLayout from '../../layouts/AdminLayout';

const App = () =>
  <Router>
    <div className='app'>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/cabinet' render={() => (
          <AdminLayout>
            <Cabinet />
          </AdminLayout>
        )} />
        <Route exact path='/' render={() => (
          <MainLayout>
            <Homepage />
          </MainLayout>
        )} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  </Router>

export default App;
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
