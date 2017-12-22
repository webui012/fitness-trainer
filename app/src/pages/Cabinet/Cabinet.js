import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserCabinet from 'UserCabinet';
import AdminCabinet from 'AdminCabinet';

class Cabinet extends Component {
  constructor(props) {
    super(props);
  }

  layoutChecker(userRole) {
    if (userRole === 'USER') {
      return (
        <UserCabinet />
      )
    };
    else if (userRole === 'ADMIN') {
      return (
        <AdminCabinet />
      )
    }
  }

  render(){
    return <div>{this.layoutChecker(this.props.UserRole)}</div>
  }
}

function mapStateToProps (state) {
  return {
    userRole: state.userRole
  }
}




export default connect(mapStateToProps)(Cabinet)
