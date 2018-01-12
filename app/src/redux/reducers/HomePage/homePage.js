import { createSelector } from 'reselect'
import {
  HOME_PAGE_SUCCESS,
  HOME_PAGE_FAILURE
} from '../../constants';

const initialState = {};

// Selector
export const getHomePageData = state => state.homePage
export const getSliderData = state => state.homePage.sliderData

// Reducer
const homePage = (state = initialState, action) => {
  switch (action.type) {
    case HOME_PAGE_SUCCESS:
      return action.data
    break;

    case HOME_PAGE_FAILURE:
      return action.data
    break;

    default:
      return initialState;
  }
}

export default homePage;
