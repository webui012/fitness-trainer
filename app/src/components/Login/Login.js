import React from 'react'
import styles from './Login.scss'
import { Link } from 'react-router-dom';

const Login = () =>
  <div className={styles['login-section']}>
    <Link to='/login' className={styles['login-btn']}>Вход</Link>
  </div>;

export default Login
