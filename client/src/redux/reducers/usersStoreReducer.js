import axios from 'axios';
import { ALL, ADMIN, ADD_USER, SEARCH_USER, USER_LOGOFF, ERROR_REDIRECT, CACHED_DATA } from '../constants';

let getCachedData = localStorage.getItem(CACHED_DATA);
if (!getCachedData){
  localStorage.setItem(CACHED_DATA, JSON.stringify(
    {
     userRole: ALL,
      admin:{
        username: 'admin',
        password1: 'admin111',
        currentUserRole: ADMIN
      }
    })
  );
   getCachedData = localStorage.getItem(CACHED_DATA);
}

/*
axios({
  method: 'post',
  url: 'http://localhost:8090/users/login',
  data: {
    name: 'dddddd',
    email: 'ggggggggg'
  },
  withCredentials: false
})
.then(response => {
        if (response.status === 200) {
          console.log(response)
          }
        });

*/

axios.get('http://localhost:8090/users/user-role').then(response => {
      console.log(response.data)
    })

const initialState = JSON.parse(getCachedData);

export default function usersStoreReducer(state = initialState, action){
  switch (action.type){
    case ADD_USER:
      localStorage.setItem(CACHED_DATA, JSON.stringify(
        {
          ...state,
          [action.value.username]: action.value,
          userRole: action.value.currentUserRole
        })
      );
    return {
        ...state,
        [action.value.username]: action.value,
        userRole: action.value.currentUserRole
      }

    case SEARCH_USER:
      for(let key in state){
        if ((action.value.login === state[key].username ||
          action.value.login === state[key].email)
          && action.value.password === state[key].password1) {
            localStorage.setItem(CACHED_DATA, JSON.stringify(
              {
                ...state,
                [key]:{ ...state[key], signIn: true },
                userRole: state[key].currentUserRole
              })
            );
            return {
              ...state,
              [key]:{ ...state[key], signIn: true },
              userRole: state[key].currentUserRole
            }
        }
      }
      localStorage.setItem(CACHED_DATA, JSON.stringify(
              {
               ...state,
             notFound: true
              })
            );
          return {
            ...state,
             notFound: true
          }

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
