import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserCabinet from './UserCabinet';
import AdminCabinet from './AdminCabinet';

class Cabinet extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

 layoutChecker(userRole) {
    if (userRole === 'USER') {
      return <UserCabinet />
    } else if (userRole === 'ADMIN') {
      return <AdminCabinet />
    }
  }

  render(){
    return <div>
      {this.layoutChecker(this.props.userRole)}
    </div>
  }
}

function mapStateToProps (state) {
  return {
    userRole: state.login.userRole
  }
}


export default connect(mapStateToProps)(Cabinet)
