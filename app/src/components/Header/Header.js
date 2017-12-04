import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import Login from '../Login/Login'

import styles from './Header.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <Login />
    </header>
  )
}

export default Header
