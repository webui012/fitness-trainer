
import React, {Component} from 'react';
import {LoginForm} from 'Components';
import {connect} from 'react-redux';
import {searchUser} from '../../redux/actions/index'

class LoginPage extends Component{

	constructor(props){
    super(props);
    this.onSubmitSignInData = this.onSubmitSignInData.bind(this);
  }

	onSubmitSignInData(value){
		this.props.send(value);
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
			const sendData = () => dispatch => {
				dispatch(searchUser(value)) //передаем данные из формы в стор
			}
			dispatch(sendData())
		}
	})

	)(LoginPage);