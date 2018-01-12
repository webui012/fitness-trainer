import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {userLogin} from '../../redux/actions';
import {ALL} from '../../redux/constants';

import './Login.scss';

class Login extends Component {

  render(){
    if (this.props.userRole === ALL){
      return (
        <div className='login-section'>
          <Link to='/login' className='login-btn'>Вход</Link>
        </div>
      )
    }
    return (
      <div>
        <Link to='/'>
          <button className='login-btn' onClick={() => this.props.userLogin(ALL)}>Выход</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    userRole: state.login.userRole
  })

const mapDispatchToProps = dispatch => ({
  userLogin: role => {
  dispatch(userLogin(role))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
