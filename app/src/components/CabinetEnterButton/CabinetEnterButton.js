import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {USER, ADMIN} from '../../redux/constants';

import './CabinetEnterButton.scss';

const CabinetEnterButton = props => {
  const { userRole } = props;

  if (userRole === ADMIN) {
    return <Link to='/cabinet/admin' className='cabinet-enter-link'>Кабинет</Link>
  } else if (userRole === USER) {
      return <Link to='/cabinet/user' className='cabinet-enter-link'>Кабинет</Link>
    }
  return null;
}

CabinetEnterButton.propTypes = {
  userRole: PropTypes.string,
};

const mapStateToProps = state => ({
    userRole: state.usersStoreReducer.userRole
  });

export default connect(mapStateToProps)(CabinetEnterButton);
