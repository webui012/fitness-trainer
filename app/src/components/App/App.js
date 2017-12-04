import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'

import styles from './App.scss';

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/services" component={Services}/>
        </Main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
