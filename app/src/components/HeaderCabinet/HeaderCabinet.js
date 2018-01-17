import React from 'react';
import PropTypes from 'prop-types';
import {
  Logo,
  Navigation,
  Login
} from 'Components';
import './HeaderCabinet.scss';

const HeaderCabinet = props => {
  const { logo, navigation } = props.data;

  return (
    <header className='main-header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      <Login />
    </header>
  );
};

HeaderCabinet.propTypes = {
  logo: PropTypes.string,
  navigation: PropTypes.PropTypes.arrayOf(PropTypes.object),
};

export default HeaderCabinet;
