import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Spinner, NoUserFoundError } from 'Components';
import LoginForm from '../components/LoginForm/LoginForm';
import { searchUser, errorRedirect } from '../redux/actions';
import { ADMIN, USER } from '../redux/constants';

class LoginContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingStatus:''
    }
    this.condRedirect = this.condRedirect.bind(this);
    this.onSubmitSignInData = this.onSubmitSignInData.bind(this);
     this.noUserErrorRedirect = this.noUserErrorRedirect.bind(this);
  }

  onSubmitSignInData(value){
    this.setState({loadingStatus: true});
    this.props.send(value);

  }

  condRedirect(role) {
    if (role === ADMIN) {
      return '/cabinet/admin'
    } else if (role === USER) {
      return '/cabinet/user'
    }
  }

  changeState(){
    this.setState({loadingStatus: false});
  }

  noUserErrorRedirect(){
    this.props.errorRedirect();
    this.setState({loadingStatus: false});
  }

  render(){
    let addSpinner;
    let noUser;
    let errorRedirect;
    if (this.state.loadingStatus){
      addSpinner =  <Spinner />;
    } else {
      addSpinner ='';
    }
    if (this.props.noUser){
      noUser = <NoUserFoundError closeMessage = {this.noUserErrorRedirect} redraw = {this.changeState.bind(this)} />;
    } else {
      noUser = '';
    }

    const { userLogin, role } = this.props;
    const { from } = this.props.location.state || {from: {pathname : this.condRedirect(role)}};

    return (<div>
      <LoginForm onSubmit={this.onSubmitSignInData} from={from} role ={role} />
      {noUser}
      {addSpinner}
    </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
   send: value => {
        const sendData = () => dispatch => {
          fetch('https://jsonplaceholder.typicode.com/posts')// Add .catch !
                  .then(function(response) {
                    return response.status;
                  })
                    .then(function(status) {
                        if (status == 200){
                          setTimeout(() => {
                            dispatch(searchUser(value))
                          },2000)//передаем данные из формы в стор
                        }
                    })
        }
        dispatch(sendData())
      },
    errorRedirect: () => {
      dispatch(errorRedirect())
    }
})

const mapStateToProps = state => ({
  role: state.usersStoreReducer.userRole,
  noUser: state.usersStoreReducer.notFound,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
