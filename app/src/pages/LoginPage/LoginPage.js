
import React, {Component} from 'react';
import {LoginForm} from 'Components';
import {connect} from 'react-redux';

class LoginPage extends Component{

	constructor(props){
    super(props);
    this.onSubmitSignInData = this.onSubmitSignInData.bind(this);
  }

	onSubmitSignInData(value){
		console.log(value);
	}

  render(){
    return (
      <LoginForm onSubmit={this.onSubmitSignInData} />
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

	)(LoginPage);