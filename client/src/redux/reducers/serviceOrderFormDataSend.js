import {
  SERVICE_ORDER_FORM_REQUEST,
  SERVICE_ORDER_FORM_SUCCESS,
} from '../constants';

const initialState = {
  sendData: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_ORDER_FORM_REQUEST:
      return { ...state, sendData: true };

    case SERVICE_ORDER_FORM_SUCCESS:
      return { ...state, sendData: false };

    default:
      return state;
  }
};