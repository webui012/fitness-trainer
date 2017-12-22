import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from 'LoginForm';
import * as userLogin from '../redux/actions'

class LoginContainer extends Component{

  render(){
    const userLogin = this.props.userLogin;
    return <LoginForm setRole={userLogin} />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(LoginContainer)
