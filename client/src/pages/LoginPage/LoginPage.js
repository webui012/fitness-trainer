import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner, NoUserFoundError } from 'Components';
import LoginForm from '../../components/LoginForm/LoginForm';
import { searchUser, errorRedirect, logInRequest } from '../../redux/actions';
import { ADMIN, USER } from '../../redux/constants';
import { Loader, Dimmer } from 'semantic-ui-react'
import './LoginPage.scss';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadingStatus:''
    }
    this.condRedirect = this.condRedirect.bind(this);
    this.onSubmitSignInData = this.onSubmitSignInData.bind(this);
    this.noUserErrorRedirect = this.noUserErrorRedirect.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  onSubmitSignInData = value => {
    this.setState({ loadingStatus: true });
    this.props.send(value);
  };

  condRedirect(role) {
    if (role === ADMIN) {
      return '/cabinet/admin';
    } else if (role === USER) {
      return '/cabinet/user';
    }
  }

  changeState = () => this.setState({ loadingStatus: false });

  noUserErrorRedirect = () => {
    this.props.errorRedirect();
    this.setState({ loadingStatus: false });
  };

  render() {
    let addSpinner;
    let noUser;
    let errorRedirect;
    if (this.state.loadingStatus){
      addSpinner = <Dimmer active inverted>
                    <Loader inverted content='Загрузка' />
                  </Dimmer>;
    } else {
      addSpinner = '';
    }

    if (this.props.noUser) {
      noUser = <NoUserFoundError
          closeMessage={this.noUserErrorRedirect}
          redraw={this.changeState}
      />;
    } else {
      noUser = '';
    }

    const { userLogin, role } = this.props;
    const { from } = this.props.location.state || { from: { pathname: this.condRedirect(role) } };
    const { pageRole } = this.props.location.state || { pageRole: role };

    return (
      <div className='page-wrapper login-wrapper'>
        <div className='page-content login-content'>
          <LoginForm onSubmit={this.onSubmitSignInData} from={from} role={role} pageRole={pageRole} />
          {noUser}
          {addSpinner}
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({

  send(value){
    dispatch(logInRequest(value));
  },

  errorRedirect: () => {
      dispatch(errorRedirect());
    },
});

const mapStateToProps = state => ({
  role: state.authentication.userRole,
  noUser: state.usersStoreReducer.notFound,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
