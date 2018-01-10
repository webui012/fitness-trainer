import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHeaderData } from '../../redux/reducers/Header';
import './Header.scss';

import {
  Logo,
  Navigation,
  Login
} from 'Components'

const Header = props => {
  const { logo, navigation } = props.header

  return (
    <header className='header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      <Login />
    </header>
  )
}

const mapStateToProps = state =>({
    header: getHeaderData(state)
})

Header.propTypes = {
  header: PropTypes.object
};

export default connect(mapStateToProps, null)(Header)
