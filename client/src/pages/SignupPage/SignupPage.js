import React, { Component } from 'react';
import { Signup, Spinner } from 'Components';
import { connect } from 'react-redux';
import { searchUser, signUpRequest } from '../../redux/actions/index';
import { SubmissionError } from 'redux-form';
import { USER} from '../../redux/constants';
import { Loader, Dimmer } from 'semantic-ui-react'

class SignupPage extends Component{

    constructor(props){
      super(props);
      this.state = {
        loadingStatus:''
      }
      this.onSubmitRegistrationData = this.onSubmitRegistrationData.bind(this);
    }

    onSubmitRegistrationData(value){
        value = {...value, currentUserRole: USER, signIn: true};
        console.log(value);
        this.setState({loadingStatus: true});
        this.props.addUser(value);
    }

    render() {
      let addSpinner;
      if (this.state.loadingStatus){
        addSpinner = <Dimmer active inverted>
                      <Loader inverted content='Загрузка' />
                    </Dimmer>;
      }
       return (
         <div className='page-wrapper signup-wrapper'>
           <div className='page-content signup-content'>
             <Signup
                 onSubmit={this.onSubmitRegistrationData}
                 routStatus={this.props.storage} />
              {addSpinner}
           </div>
         </div>
       )
    }
}


const mapStateToProps = state => (
        {
         storage: state.usersStoreReducer.userRole
        }
)

const mapDispatchToProps = dispatch => (
    {
      addUser(data){
        dispatch(signUpRequest(data));
      }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
