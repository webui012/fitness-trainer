import React, {Component} from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm/LoginForm';
import { searchUser } from '../redux/actions';
import { ADMIN, USER } from '../redux/constants';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.condRedirect = this.condRedirect.bind(this);
    this.onSubmitSignInData = this.onSubmitSignInData.bind(this);
  }

  onSubmitSignInData(value){
    this.props.send(value);
  }

  condRedirect(role) {
    if (role === ADMIN) {
      return '/cabinet/admin'
    } else if (role === USER) {
      return '/cabinet/user'
    }
  }

  render(){
    const { userLogin, role } = this.props;
    const { from } = this.props.location.state || {from: {pathname : this.condRedirect(role)}};
    return <LoginForm onSubmit={this.onSubmitSignInData} from={from} role ={role} />
  }
}

const mapDispatchToProps = dispatch => ({
   send: value = > {
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

const mapStateToProps = state => ({
  role: state.usersStoreReducer.userRole
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
