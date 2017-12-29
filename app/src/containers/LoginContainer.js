import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/LoginForm/LoginForm';
import userLogin from '../redux/actions';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {};
   // this.layoutChecker = this.layoutChecker.bind(this);
  }

  layoutChecker(userRole) {
    if (userRole === 'USER') {
      return 'user'
    } else if (userRole === 'ADMIN') {
      return 'admin'
    }
  }

  render(){
    const userLogin = this.props.userLogin;
    const userRole = this.props.userRole;
    return <LoginForm setRole={userLogin} path={this.layoutChecker(userRole)} />
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

//bindActionCreators(userLogin, dispatch)
