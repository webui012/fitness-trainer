import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {USER, ADMIN} from '../../redux/constants';

import './CabinetEnterButton.scss';

const CabinetEnterButton = props => {

  if (props.userRole === ADMIN){
    return <Link to='/cabinet/admin' className='nav-link'>Кабинет</Link>
  } else if (props.userRole === USER){
      return <Link to='/cabinet/user' className='nav-link'>Кабинет</Link>
    }
  return null;
}

const mapStateToProps = state => ({
    userRole: state.usersStoreReducer.userRole
  })

export default connect(mapStateToProps)(CabinetEnterButton);
