import React, { Component } from 'react'
import Header from '../Header'
import Slider from '../Slider'
import Main from '../Main'
import Footer from '../Footer'
import './style.scss'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Slider />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default App
