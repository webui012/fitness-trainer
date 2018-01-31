import { ALL, ADMIN, ADD_USER, SEARCH_USER, USER_LOGOFF, ERROR_REDIRECT, CACHED_DATA, SIGNIN_SAVE_DATA_SUCCESS, LOGIN_SEARCH_DATA_SUCCESS } from '../constants';

const initialState = {};

export default function usersStoreReducer(state = initialState, action){
  switch (action.type){
    case USER_LOGOFF:
      for(let key in state){
        if (state[key].signIn){
          localStorage.setItem(CACHED_DATA, JSON.stringify(
            {
              ...state,
              [key]:{ ...state[key], signIn: false },
            userRole: ALL
            })
          );
          return {
            ...state,
            [key]:{ ...state[key], signIn: false },
            userRole: ALL
          }
        }
      }

    case ERROR_REDIRECT:
     localStorage.setItem(CACHED_DATA, JSON.stringify(
            {
               ...state,
            notFound: false
            })
          );
          return {
            ...state,
            notFound: false
          }

    default: return state;
  }
};
