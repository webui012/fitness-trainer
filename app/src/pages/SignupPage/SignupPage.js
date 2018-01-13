import React, {Component} from 'react';
import {Signup} from 'Components';
import {connect} from 'react-redux';
import {addUser} from '../../redux/actions/index';
import { SubmissionError } from 'redux-form';
import { USER } from '../../redux/constants';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class SignupPage extends Component{

    constructor(props){
   super(props);
   this.routStatus = false;
   this.onSubmitRegistrationData = this.onSubmitRegistrationData.bind(this);
 }

    onSubmitRegistrationData(value){
        value = {...value, currentUserRole: USER};
        console.log(value);
        this.props.send(value);
        this.routStatus = true;
    }


     render(){
   return (
     <div>
       <Signup
           onSubmit={this.onSubmitRegistrationData}
           routStatus={this.routStatus}
        />
     </div>
   )
 }
}

export default connect(
    state => (
        {
         storage: state
        }
    ),
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
                                        dispatch(addUser(value))
                                    },4000)//передаем данные из формы в стор
                                }
                           })
                }
                dispatch(sendData())
            },
        }
    )

)(SignupPage);
