import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {USER, ADMIN} from '../../redux/constants';

import './CabinetEnterButton.scss';

const CabinetEnterButton = props => {
  const { userRole } = props;

  if (props.userRole === ADMIN){
    return <Link to='/cabinet/admin' className='nav-link'>Кабинет</Link>
  } else if (props.userRole === USER){
      return <Link to='/cabinet/user' className='nav-link'>Кабинет</Link>
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
