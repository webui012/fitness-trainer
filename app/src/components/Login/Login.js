import React from 'react'
import styles from './Login.scss'

const Login = () =>
  <div className={styles['login-section']}>
    <a href='/login' className={styles['login-btn']}>Вход</a>
  </div>;

export default Login
