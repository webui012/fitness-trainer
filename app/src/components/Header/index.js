import React from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import Login from '../Login'

import styles from './style.scss'

const Header = () =>
  <header className={styles.header}>
    <Logo />
    <Navigation />
    <Login />
  </header>;

export default Header
