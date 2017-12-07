import React from 'react'
import Logo from '../Logo/Logo.js'
import Navigation from '../Navigation/Navigation.js'
import Login from '../Login/Login.js'

import './Header.scss'

const Header = () =>
  <header className='header'>
    <Logo />
    <Navigation />
    <Login />
  </header>

export default Header
