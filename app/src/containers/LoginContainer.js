import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/LoginForm/LoginForm';
import userLogin from '../redux/actions';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const userLogin = this.props.userLogin;
    return <LoginForm setRole={userLogin} />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogin: role => {
      dispatch(userLogin(role))
    }
  }
}


export default connect(null, mapDispatchToProps)(LoginContainer)

//bindActionCreators(userLogin, dispatch)
