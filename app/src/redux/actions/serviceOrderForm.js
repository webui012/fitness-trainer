import {
  NEXT_STEP_ORDER_FORM,
  PREV_STEP_ORDER_FORM,
  LOAD_ORDER_FORM
} from '../constants';

export const serviceOrderNextStep = step => ({
  type: NEXT_STEP_ORDER_FORM,
  step,
});

export const serviceOrderPrevStep = step => ({
  type: PREV_STEP_ORDER_FORM,
  step,
});

export const serviceOrderPageLoad = data => ({
  type: LOAD_ORDER_FORM,
  data,
});
