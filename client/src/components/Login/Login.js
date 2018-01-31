import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { userLogoff } from '../../redux/actions';
import { ALL } from '../../redux/constants';

import './Login.scss';

const Login = props => {
  const { userRole } = props;

  if (userRole === ALL) {
    return (
      <div className='login-section'>
        <Link to='/login' className='login-btn'>Вход</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to='/'>
        <button className='login-btn' onClick={() => props.userLogoff()}>Выход</button>
      </Link>
    </div>
  );
};

Login.propTypes = {
  userRole: PropTypes.string,
};

const mapStateToProps = state => ({
  userRole: state.usersStoreReducer.userRole,
});

const mapDispatchToProps = dispatch => ({
  userLogoff: () => {
    dispatch({type: 'LOGOUT_USER_REQUEST'});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
