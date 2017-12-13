import React from 'react';
import {
  Logo,
  Navigation,
  Login
} from 'Components';
import './Header.scss';

import HeaderData from './HeaderData'

const Header = () => {
  const logo = HeaderData.logo,
        navigation = HeaderData.navigation

  return (
    <header className='header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      <Login />
    </header>
  )
}


export default Header
