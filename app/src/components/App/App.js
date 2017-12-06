import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Homepage from '../pages/Homepage/Homepage.js';
import About from '../pages/About/About.js';
import Services from '../pages/Services/Services.js';
import Sales from '../pages/Sales/Sales.js';
import Online from '../pages/Online/Online.js';
import Forum from '../pages/Forum/Forum.js';
import Contacts from '../pages/Contacts/Contacts.js';
import LoginPage from '../pages/LoginPage/LoginPage.js'
import SignupPage from '../pages/SignupPage/SignupPage.js'

import styles from './App.scss';

const App = () =>
  <Router>
    <div className={styles.App}>
      <Header />
      <Main>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/services/online' component={Online} />
        <Route exact path='/sales' component={Sales} />
        <Route exact path='/forum' component={Forum} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
      </Main>
      <Footer />
    </div>
  </Router>


export default App;
