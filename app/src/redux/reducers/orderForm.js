import * as ActionType from '../constants';

export const orderForm = (state = {step: 1}, action) => {
  switch (action.type) {
    case ActionType.NEXT_STEP:
      return {
        ...state,
        step: action.step + 1
      };
    case ActionType.PREV_STEP:
      return {
        ...state,
        step: action.step - 1
      };
    case ActionType.PAGE_LOAD:
      return state;
    default:
      return state
  }
};
