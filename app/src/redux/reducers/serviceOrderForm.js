import * as ActionType from '../constants';

export const orderForm = (state = {step: 1, isRegistered: true}, action) => {
  switch (action.type) {
    case ActionType.NEXT_STEP_ORDER_FORM:
      return {
        ...state,
        step: action.step + 1
      };
    case ActionType.PREV_STEP_ORDER_FORM:
      return {
        ...state,
        step: action.step - 1
      };
    case ActionType.LOAD_ORDER_FORM:
      return {
        ...state,
        data: action.data
      };
    default:
      return state
  }
};
