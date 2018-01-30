import {
  ABOUT_GETDATA_REQUEST,
  ABOUT_GETDATA_SUCCESS
} from '../constants';

const initialState = {
  loading: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ABOUT_GETDATA_REQUEST:
      return { ...state, loading: true };

    case ABOUT_GETDATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    default:
      return state;
  }
};
