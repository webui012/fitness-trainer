import React, { Component } from 'react'
import Header from '../Header'
import Slider from '../Slider'
import Footer from '../Footer'
import './style.scss'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Slider />
        <Footer />
      </div>
    )
  }
}

export default App
