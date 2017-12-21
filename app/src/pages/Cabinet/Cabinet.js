import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserCabinet from 'UserCabinet';
import AdminCabinet from 'AdminCabinet';

class Cabinet extends Component {
  render(){
    return(
      switch(props.user){
        case 'USER':
          return <UserCabinet />;
        case 'ADMIN':
          return <AdminCabinet />;
      }
    )
  }
}

function mapStateToProps (state) {
  return {
    userRole: state.userRole
  }
}




export default connect(mapStateToProps)(Cabinet)
