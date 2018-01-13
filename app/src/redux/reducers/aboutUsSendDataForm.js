import {
  ABOUTUS_FORM_REQUEST,
  ABOUTUS_FORM_ABOUTUS_SUCCESS,
  ABOUTUS_ACTION_FAILURE,
  ABOUTUS_CLOSE_ACTION_FAILURE,
} from '../constants';

const initialState = {
  sendData: false,
  errorMessage: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ABOUTUS_FORM_REQUEST:
      return { ...state, sendData: true }

    case ABOUTUS_FORM_ABOUTUS_SUCCESS:
      return { ...state, sendData: false }

    case ABOUTUS_ACTION_FAILURE:
      return { ...state, sendData: false, errorMessage: true }

    case ABOUTUS_CLOSE_ACTION_FAILURE:
      return { ...state, errorMessage: false }

    default:
      return state;
  }
}
