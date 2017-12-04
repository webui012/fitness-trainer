import React, { Component } from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import Login from '../Login'

import './style.scss'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Navigation />
      <Login />
    </header>
  )
}

export default Header
