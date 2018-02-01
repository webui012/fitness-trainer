import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHeaderData } from '../../redux/reducers/header';
import {
  Logo,
  Navigation,
  Login,
  ProfileMenu
} from 'Components';
import './Header.scss';
import { getAuthenticationStatus, getUsername } from '../../redux/reducers/auth';
import { userLogout } from '../../redux/actions/auth';


const Header = props => {
  const { logo, navigation } = props.header;

  return (
    <header className='main-header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      {props.isAuthenticated
        ? <ProfileMenu username={props.username} userLogout={props.userLogout}/>
        : <Login />
      }
    </header>
  );
};

const mapStateToProps = state => ({
  header: getHeaderData(state),
  username: getUsername(state),
  isAuthenticated: getAuthenticationStatus(state)
});

const mapDispatchToProps = {
  getUsername,
  getAuthenticationStatus,
  userLogout
}

Header.propTypes = {
  header: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
