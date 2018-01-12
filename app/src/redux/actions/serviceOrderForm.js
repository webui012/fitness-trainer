import {
  NEXT_STEP_ORDER_FORM,
  PREV_STEP_ORDER_FORM,
  LOAD_ORDER_FORM
} from '../constants';

export const serviceOrderNextStep = step => {
  return {
    type: NEXT_STEP_ORDER_FORM,
    step
  }
};

export const serviceOrderPrevStep = step => {
  return {
    type: PREV_STEP_ORDER_FORM,
    step
  }
};

export const serviceOrderPageLoad = data => {
  return {
    type: LOAD_ORDER_FORM,
    data
  }
};