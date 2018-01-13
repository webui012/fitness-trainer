import React, {Component} from 'react';
import {Signup, Loading} from 'Components';
import {connect} from 'react-redux';
import {addUser} from '../../redux/actions/index';
import { SubmissionError } from 'redux-form';
import { USER } from '../../redux/constants';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class SignupPage extends Component{

    constructor(props){
   super(props);
   this.state = {
      loadingStatus:'',
      routStatus: false
    }
   this.onSubmitRegistrationData = this.onSubmitRegistrationData.bind(this);
   this.setRoutAfterSuccess = this.setRoutAfterSuccess.bind(this);
 }

    onSubmitRegistrationData(value){
        value = {...value, currentUserRole: USER, signIn: true};
        console.log(value);
          this.setState({loadingStatus: true});
        this.props.send(value, this.setRoutAfterSuccess);
        //this.routStatus = true;
    }

    setRoutAfterSuccess(){
       this.setState({routStatus: true});
    }


     render(){
      let addSpinner;
      if (this.state.loadingStatus){
        addSpinner = <Loading />;
      }
   return (
     <div>
       <Signup
           onSubmit={this.onSubmitRegistrationData}
           routStatus={this.state.routStatus}
        />
       {addSpinner}
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
            send(value, routStatus){
                const sendData = () => dispatch => {
                    fetch('https://jsonplaceholder.typicode.com/posts')// Add .catch !
                         .then(function(response) {
                           return response.status;
                         })
                           .then(function(status) {
                                 if (status == 200){
                                    setTimeout(() => {
                                        dispatch(addUser(value)); routStatus();
                                    },2000)//передаем данные из формы в стор
                                }
                           })
                }
                dispatch(sendData())
            },
        }
    )

)(SignupPage);
