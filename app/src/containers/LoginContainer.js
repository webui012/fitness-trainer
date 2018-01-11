import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';
import {userLogin} from '../redux/actions';
import {ADMIN, USER} from '../redux/constants';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.condRedirect = this.condRedirect.bind(this);
  }

  condRedirect(role) {
    if (role === ADMIN) {
      return '/cabinet/admin'
    } else if (role === USER) {
      return '/cabinet/user'
    }
  }

  render(){
    const { userLogin, role } = this.props;
    const { from } = this.props.location.state || {from: {pathname : this.condRedirect(role)}};
    return <LoginForm setRole={userLogin} from={from} />
  }
}

const mapDispatchToProps = dispatch => ({
    userLogin: role => {
      dispatch(userLogin(role))
    }
})

const mapStateToProps = state => ({
  role: state.login.userRole
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
