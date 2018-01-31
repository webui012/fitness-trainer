import {
  SUCCESS_SERVICES_PAGE,
} from '../constants';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_SERVICES_PAGE:
      return { ...state, data: action.data };

    default:
      return state;
  }
};
