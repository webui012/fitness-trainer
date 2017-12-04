import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Services from '../../pages/Services/Services'

import './style.scss'

const Main = () => {
  return (
    <main className='main'>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/services" component={Services}/>
    </main>
  )
}
export default Main
