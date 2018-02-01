import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.scss';
import { getAuthenticationStatus } from '../../redux/reducers/auth';
import { userLogout } from '../../redux/actions/auth';

const Login = props =>
    <div className='login-section'>
      <Link to='/login' className='login-btn'>Вход</Link>
    </div>

const mapStateToProps = state => ({
    isAuthenticated: getAuthenticationStatus(state),
});

const mapDispatchToProps = {
  getAuthenticationStatus,
  userLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
