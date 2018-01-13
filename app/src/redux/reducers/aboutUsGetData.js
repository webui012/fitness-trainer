import {
  PAGE_ABOUTUS_GETDATA_REQUEST,
  PAGE_ABOUTUS_GETDATA_SUCCESS,
} from '../constants';

const initialState = {
  data: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_ABOUTUS_GETDATA_SUCCESS:
      return { ...state, data: action.payload }

    default:
      return state;
  }
}
