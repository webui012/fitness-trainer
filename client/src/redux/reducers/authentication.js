import {
  AUTHENTICATION_GETDATA_REQUEST,
  AUTHENTICATION_GETDATA_SUCCESS,
  AUTHENTICATION_GETDATA_FAILURE,
  AUTHENTICATION_SET_FETCHED_ROLE,
  AUTHENTICATION_SET_DEFAULT_ROLE,
  ALL
} from '../constants';

const initialState = {
  loading: false,
  userRole: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_GETDATA_REQUEST:
      return { ...state, loading: true };

    case AUTHENTICATION_GETDATA_SUCCESS:
      return { ...state, loading: false, error: false, userRole: action.payload };

    case AUTHENTICATION_GETDATA_FAILURE:
      return { ...state, loading: false, error: true, userRole: ALL };

    case AUTHENTICATION_SET_FETCHED_ROLE:
      return { ...state, userRole: action.payload };

    case AUTHENTICATION_SET_DEFAULT_ROLE:
      return { ...state, userRole: ALL };

    default:
      return state;
  }
};
