import React, { Component } from 'react';
import LoginForm from '../../components/Forms/LoginForm';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/auth';
import './LoginPage.scss';

class LoginPage extends Component {
  submit = data => {
    this.props.userLogin(data)
  }

  render = () => (
    <div className='page-wrapper login-wrapper'>
        <div className='page-content login-content'>
          <LoginForm submit={this.submit}/>
        </div>
      </div>
  )
}

export default connect(null, { userLogin })(LoginPage);
