import React, { Component } from 'react'
import styles from './style.scss'
import {
  Link
} from 'react-router-dom';

const Navigation = props =>
  <nav className={styles.nav}>
    <Link to='/'>Home</Link>
    <Link to='/contacts'>Contacts</Link>
    <Link to='/login'>login</Link>
  </nav>

export default Navigation
