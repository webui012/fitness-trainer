import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {userLogin} from '../../redux/actions';
import {USER, ADMIN} from '../../redux/constants';

import './CabinetEnterButton.scss';

const CabinetEnterButton = props => {

  if (props.userRole === ADMIN){
    return <Link to='/cabinet/admin' className='cabinet-enter-link'>Кабинет</Link>
  } else if (props.userRole === USER){
      return <Link to='/cabinet/user' className='cabinet-enter-link'>Кабинет</Link>
    }
  return null;
}

const mapStateToProps = state => ({
    userRole: state.usersStoreReducer.userRole
  })

const mapDispatchToProps = dispatch => ({
  userLogin: role => {
  dispatch(userLogin(role))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CabinetEnterButton);
