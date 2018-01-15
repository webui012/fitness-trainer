import {
  NEXT_STEP_ORDER_FORM,
  PREV_STEP_ORDER_FORM,
  LOAD_ORDER_FORM
} from '../constants';

export const orderForm = (state = { step: 1 }, action) => {
  switch (action.type) {
    case NEXT_STEP_ORDER_FORM:
      return {
        ...state,
        step: action.step + 1
      };
    case PREV_STEP_ORDER_FORM:
      return {
        ...state,
        step: action.step - 1
      };
    case LOAD_ORDER_FORM:
      return {
        ...state,
        data: action.data
      };
    default:
      return state
  }
};
