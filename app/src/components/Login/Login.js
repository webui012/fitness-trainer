import React, { Component } from 'react'
import styles from './Login.scss'

const Login = () =>{
  return(
    <div className={styles['login-section']}>
      <a href='#' className={styles['login-btn']}>Вход</a>
    </div>
  )
}
export default Login
