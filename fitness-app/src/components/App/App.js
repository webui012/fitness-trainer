import React, { Component } from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Slider/>
        <Footer/>
      </div>


    )
  }
}

export default App
