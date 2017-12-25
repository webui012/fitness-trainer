import React, {Component} from 'react';
import {Signup} from 'Components';
import {connect} from 'react-redux';
import {addUser} from '../../redux/actions/index'

class SignupPage extends Component{

	constructor(props){
    super(props);
    this.onSubmitRegistrationData = this.onSubmitRegistrationData.bind(this);
  }

	onSubmitRegistrationData(value){
		this.props.send(value);
	}

	getStore(){console.log(this.props.storage)}

  	render(){
    return (<div>
      <button onClick={this.getStore.bind(this)}>vdsvsd</button>
      <Signup onSubmit={this.onSubmitRegistrationData} /></div>
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
				fetch('https://jsonplaceholder.typicode.com/posts')// Add .catch !
          .then(function(response) {
            return response.status;
          })
            .then(function(status) {
              if (status == 200){
                setTimeout(() => {
                dispatch(addUser(value))
                },4000)//передаем данные из формы в стор
                }
            }) //передаем данные из формы в стор
			}
			dispatch(sendData())
		}
	})

	)(SignupPage);
