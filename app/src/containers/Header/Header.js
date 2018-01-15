import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHeaderData } from '../../redux/reducers/header';
import {
  Logo,
  Navigation,
  Login,
  CabinetEnterButton
} from 'Components'
import './Header.scss';

const Header = props => {
  const { logo, navigation } = props.header

  return (
    <header className='main-header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      <CabinetEnterButton />
      <Login />
    </header>
  )
}

const mapStateToProps = state => ({
  header: getHeaderData(state)
})

Header.propTypes = {
  header: PropTypes.object
};

export default connect(mapStateToProps, null)(Header)
