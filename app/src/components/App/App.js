import React from 'react';
import {
  BrowserRouter as Router,
  Route,
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
  TrainingPlanSection
} from 'Pages';

import './App.scss';
import MainLayout from '../../layouts/MainLayout'

const App = () =>
  <Router>
    <div className='app'>
      <MainLayout>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/services/online-training' component={Online} />
        <Route exact path='/services/training-plan' component={TrainingPlanSection} />
        <Route exact path='/services/nutrition-plan' component={Nutrition} />
        <Route exact path='/sales' component={Sales} />
        <Route exact path='/forum' component={Forum} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
      </MainLayout>
    </div>
  </Router>

export default App;
