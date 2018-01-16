import { PAGE_SALES_WAIT, PAGE_SALES_SUCCESS } from '../constants';

const initialState = {
  spinner: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_SALES_WAIT:
      return { ...state, spinner: true };

    case PAGE_SALES_SUCCESS:
      return { ...state, spinner: false, data: action.data };

    default:
      return state;
  }
};
