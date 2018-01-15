import ActionTypes from '../constants';
import { createSelector } from 'reselect'

const initialState = {
  "sliderData": {
    slides: [
      {
        url: 'https://goo.gl/JH36Zv',
        alt: 'Pushup Workout'
      },

       {
        url: 'https://goo.gl/nExx2r',
        alt: 'Workout Package'
      },

       {
        url: 'https://goo.gl/dCS4uK',
        alt: 'Running Workout'
      }
    ],

    sliderParams: {
      containerClass: 'slider',
      paginationCustomizedClass: 'pagination',
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 0,
      speed: 1000,
      loop: true,
    }
  }
}

// Selector
export const getHomePageData = state => state.homePage

// Reducer
const homePage = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default homePage
