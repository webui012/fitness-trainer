import React from 'react';

const initState = {
  userRole: user
}

export default function(state=initState, action) {
  switch (action.type){
    case 'USER_LOGIN':
      return {...state, userRole: action.payload}
    default:
      return state;
  }
}
