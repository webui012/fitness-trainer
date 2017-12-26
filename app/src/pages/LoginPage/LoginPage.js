
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
	dispatch => (
		{
			send(value){
				const sendData = () => dispatch => {
					fetch('https://jsonplaceholder.typicode.com/posts')// Add .catch !
	          			.then(function(response) {
	            			return response.status;
	          			})
	            			.then(function(status) {
	              				if (status == 200){
	                				setTimeout(() => {
	                					dispatch(searchUser(value))
	                				},4000)//передаем данные из формы в стор
	                			}
	            			})
				}
				dispatch(sendData())
			}
		}
	)

	)(LoginPage);