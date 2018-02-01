import React from 'react';
import PropTypes from 'prop-types';
import {
  Logo,
  Navigation,
  Login,
  ProfileMenu
} from 'Components';
import { connect } from 'react-redux';
import './HeaderCabinet.scss';
import { getUsername } from '../../redux/reducers/auth';
import { userLogout } from '../../redux/actions/auth';

const HeaderCabinet = props => {
  const { logo, navigation } = props.data;

  return (
    <header className='main-header'>
      <Logo data={logo} />
      <Navigation data={navigation} />
      <ProfileMenu username={props.username} userLogout={props.userLogout}/>
    </header>
  );
};

const mapStateToProps = state => ({
  username: getUsername(state),
});

const mapDispatchToProps = {
  getUsername,
  userLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCabinet);
