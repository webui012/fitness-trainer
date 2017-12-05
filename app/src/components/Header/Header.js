import React from 'react'
import Logo from '../Logo/Logo.js'
import Navigation from '../Navigation/Navigation.js'
import Login from '../Login/Login.js'

import styles from './Header.scss'

const Header = () =>
  <header className={styles.header}>
    <Logo />
    <Navigation />
    <Login />
  </header>;

export default Header
