import {
  PAGE_ABOUTUS_WARNING_MESSAGE,
} from '../constants';

const initialState = {
  avatar: null,
  name: null,
  surname: null,
  contraindications: null,
  aims: null,
  age: null,
  height: null,
  weight: null,
  neck: null,
  breast: null,
  tail: null,
  hips: null,
  legs: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_ABOUTUS_WARNING_MESSAGE:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}
