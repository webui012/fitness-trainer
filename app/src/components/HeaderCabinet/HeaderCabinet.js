import React from 'react';
import {
  Logo,
  Navigation,
  Login
} from 'Components';
import './HeaderCabinet.scss';
import HeaderCabinetData from './HeaderCabinetData'

const HeaderCabinet = () => {
  const { logo, navigation } = HeaderCabinetData;

  return (
    <header className='header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      <Login />
    </header>
  )
}


export default HeaderCabinet;
