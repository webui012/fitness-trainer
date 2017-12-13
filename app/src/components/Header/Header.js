import React from 'react';
import {
  Logo,
  Navigation,
  Login
} from 'Components';
import './Header.scss';

const Header = () =>
  <header className='header'>
    <Logo />
    <Navigation />
    <Login />
  </header>

export default Header
