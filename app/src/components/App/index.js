import React, { Component } from 'react'
import Header from '../common/Header'
import Main from '../common/Main/Main'
import Footer from '../common/Footer'
import {BrowserRouter as Router} from 'react-router-dom'

import './style.scss'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  )
}

export default App
