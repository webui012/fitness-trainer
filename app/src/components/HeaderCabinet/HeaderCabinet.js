import React from 'react';
import {
  Logo,
  Navigation,
  Login
} from 'Components';
import './HeaderCabinet.scss';


const HeaderCabinet = props => {
  const {logo, navigation} = props.data;

  return (
    <header className='main-header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      <Login />
    </header>
  )
}


export default HeaderCabinet;
