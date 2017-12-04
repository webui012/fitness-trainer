import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import Homepage from '../../pages/Homepage';
import About from '../../pages/About';
import Services from '../../pages/Services';
import Sales from '../../pages/Sales';
import Forum from '../../pages/Forum';
import Contacts from '../../pages/Contacts';

import styles from './style.scss';

const App = () =>
  <Router>
    <div className='App'>
      <Header />
      <Main>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/sales' component={Sales} />
        <Route exact path='/forum' component={Forum} />
        <Route exact path='/contacts' component={Contacts} />
      </Main>
      <Footer />
    </div>
  </Router>


export default App;
