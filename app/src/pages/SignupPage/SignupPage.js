import React, {Component} from 'react';
import {Signup} from 'Components';
import {connect} from 'react-redux';

class SignupPage extends Component{

	constructor(props){
    super(props);
    this.onSubmitRegistrationData = this.onSubmitRegistrationData.bind(this);
  }

	onSubmitRegistrationData(value){
		console.log(value);
	}

  render(){
    return (
      <Signup onSubmit={this.onSubmitRegistrationData} />
    )
  }
}

export default connect(
	state => ({
		 storage: state
		}),
	dispatch => ({
		send(value){
			sendData = () => dispatch => {
				dispatch({}) //передаем данные из формы в стор
			}
			dispatch(sendData())
		}
	})

	)(SignupPage);
