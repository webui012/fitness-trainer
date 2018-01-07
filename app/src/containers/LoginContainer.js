import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';
import {userLogin} from '../redux/actions';

class LoginContainer extends Component{

  render(){
    const userLogin = this.props.userLogin;
    const { from } = this.props.location.state || {from: {pathname: '/'}};
    return <LoginForm setRole={userLogin} from={from} />
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userLogin: role => {
      dispatch(userLogin(role))
    }
  }
}


export default connect(null, mapDispatchToProps)(LoginContainer)
/*
onClick(){
    <Redirect to={this.props.location.state || { from: {pathname: '/'}}}
    />
  }

  */
