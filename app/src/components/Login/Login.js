import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom';

const Login = () =>
  <div className='login-section'>
    <Link to='/login' className='login-btn'>Вход</Link>
  </div>;

export default Login
