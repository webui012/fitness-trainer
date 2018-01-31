import {
  NEXT_STEP_ORDER_FORM,
  PREV_STEP_ORDER_FORM,
  LOAD_ORDER_FORM,
  REQUEST_ORDER_FORM,
  SUCCESS_ORDER_FORM,
  SERVICE_ORDER_FORM_REQUEST,
  SERVICE_ORDER_FORM_SUCCESS
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

export const serviceOrderPageRequest = () => ({
  type: REQUEST_ORDER_FORM,
});

export const serviceOrderPageSuccess = data => ({
  type: SUCCESS_ORDER_FORM,
  data,
});

export const servcieOrderFormRequest = data => ({
  type: SERVICE_ORDER_FORM_REQUEST,
  data,
});

export const servcieOrderFormSuccess = data => ({
  type: SERVICE_ORDER_FORM_SUCCESS,
  data,
});