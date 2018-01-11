import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import { Link } from 'react-router-dom';
import {userLogin} from '../../redux/actions';

class Login extends Component {

  render(){
    if (this.props.userRole === 'ALL'){
      return (
        <div className='login-section'>
          <Link to='/login' className='login-btn'>Вход</Link>
        </div>
      )
    }
    return (
      <div>
        <button className='login-btn' onClick={() => this.props.userLogin('ALL')}>Выход</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    userRole: state.login.userRole
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userLogin: role => {
      dispatch(userLogin(role))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
