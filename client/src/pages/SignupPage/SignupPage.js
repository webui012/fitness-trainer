import React, { Component } from 'react';
import SignUpForm from '../../components/Forms/SignUpForm';
import { connect } from 'react-redux';
import { userSignUp } from '../../redux/actions/auth';
import { getLoadingStatus } from '../../redux/reducers/auth';
import './SignupPage.scss';

class SignupPage extends Component {
  submit = data => this.props.userSignUp(data)

  render = () => (
    <div className='page-wrapper signup-wrapper'>
      <div className='page-content signup-content'>
        <SignUpForm isLoading={this.props.isLoading} submit={this.submit}/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: getLoadingStatus(state)
})

export default connect(mapStateToProps, { userSignUp })(SignupPage);
