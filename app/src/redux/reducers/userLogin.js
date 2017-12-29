import React from 'react';

const initState = {
  userRole: 'USER'
}

export default function login(state=initState, action) {
  switch (action.type){
    case 'USER_LOGIN':
      return {...state, userRole: action.payload};
    default:
      return state;
  }
}
