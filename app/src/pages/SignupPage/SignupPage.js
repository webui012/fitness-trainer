import React, { Component } from 'react';
import { Signup, Spinner } from 'Components';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/index';
import { SubmissionError } from 'redux-form';
import { USER } from '../../redux/constants';

class SignupPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loadingStatus: '',
      routStatus: false,
    };
  }

  onSubmitRegistrationData = value => {
    value = { ...value, currentUserRole: USER, signIn: true };
    this.setState({ loadingStatus: true });
    this.props.send(value, this.setRoutAfterSuccess);
  };

  setRoutAfterSuccess = () => this.setState({ routStatus: true });

  render() {
    let addSpinner;
    if (this.state.loadingStatus) {
      addSpinner = <Spinner />;
    }

    return (
      <div>
        <Signup
            onSubmit={this.onSubmitRegistrationData}
            routStatus={this.state.routStatus}
        />
        {addSpinner}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  storage: state,
});

const mapDispatchToProps = dispatch => ({
  send(value, routStatus) {
    const sendData = () => dispatch => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          return response.status;
        })
        .then(function (status) {
          if (status === 200) {
            setTimeout(() => {
              dispatch(addUser(value)); routStatus();
            }, 2000);//передаем данные из формы в стор
          }
        });
      };

    dispatch(sendData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
