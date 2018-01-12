import {
  ABOUTUS_FORM_REQUEST,
  ABOUTUS_FORM_ABOUTUS_SUCCESS,
  ABOUTUS_ACTION_FAILURE,
  ABOUTUS_CLOSE_ACTION_FAILURE,
} from '../constants';

const initialState = {
  personalData: null,
  contraindications: null,
  measuredData: null,
  aimsData: null,
  errorMessage: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ABOUTUS_FORM_REQUEST:
      return { ...state, [action.payload.userId]: 'Данные отправляются...' }

    case ABOUTUS_FORM_ABOUTUS_SUCCESS:
      return { ...state, [action.payload.userId]: null }

    case ABOUTUS_ACTION_FAILURE:
      return { ...state, [action.payload.userId]: null, errorMessage: true }

    case ABOUTUS_CLOSE_ACTION_FAILURE:
      return { ...state, errorMessage: false }

    default:
      return state;
  }
}
