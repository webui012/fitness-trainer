import React, { Component } from 'react';
import SignUpForm from '../../components/Forms/SignUpForm';
import { connect } from 'react-redux';
import { getLoadingStatus } from '../../redux/reducers/auth';
import { userSignUp } from '../../redux/actions/auth';

class SignupPage extends Component {
  submit = data => {
    this.props.userSignUp(data)
  }

  render = () =>
     <SignUpForm isLoading={this.props.isLoading} submit={this.submit}/>
}

const mapStateToProps = state => ({
  isLoading: getLoadingStatus(state)
})

export default connect(mapStateToProps, { userSignUp })(SignupPage);
