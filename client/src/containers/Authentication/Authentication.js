import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'Components';
import { connect } from 'react-redux';
import { authenticationGetDataRequest } from '../../redux/actions';

class Authentication extends Component {
  static propTypes = {
    authenticationGetDataRequest: PropTypes.func.isRequired,
    userRole: PropTypes.string,
  }

  componentDidMount() {
    this.props.authenticationGetDataRequest();
  };

  render() {
    console.log(this.props.userRole);

    if (this.props.userRole) {
      return this.props.children
    } else {
      return (<Spinner />);
    }
  }
}

const mapStateToProps = state => ({
  userRole: state.authentication.userRole,
});

const mapDispatchToProps = dispatch => ({
  authenticationGetDataRequest: () => dispatch(authenticationGetDataRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
