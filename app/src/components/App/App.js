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
  TrainingPlanSection,
  Cabinet
} from 'Pages';

import './App.scss';
import MainLayout from '../../layouts/MainLayout'

const App = () =>
  <Router>
    <div className='app'>
      <MainLayout>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route path='/services/online-training' component={Online} />
        <Route path='/services/training-plan' component={TrainingPlanSection} />
        <Route path='/services/nutrition-plan' component={Nutrition} />
        <Route path='/sales' component={Sales} />
        <Route path='/forum' component={Forum} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/cabinet' component={Cabinet} />

      </MainLayout>
    </div>
  </Router>

export default App;
