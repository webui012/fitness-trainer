import * as Actions from '../constants';

export const nextStep = step => {
  return {
    type: Actions.NEXT_STEP,
    step: step
  }
};

export const prevStep = step => {
  return {
    type: Actions.PREV_STEP,
    step: step
  }
};

export const pageLoad = step => {
  return {
    type: Actions.PAGE_LOAD,
    step: step
  }
};