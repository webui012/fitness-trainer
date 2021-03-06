import ActionTypes from '../constants';
import { createSelector } from 'reselect'

const initialState = {
  "sliderData": {
    slides: [
      {
        url: 'https://www.hdwallpapers.in/walls/pushup_workout-HD.jpg',
        alt: 'Pushup Workout'
      },

       {
        url: 'https://media.self.com/photos/5867a314bf5e49f716efe864/2:1/pass/workout-package_1.png',
        alt: 'Workout Package'
      },

       {
        url: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-498315681.jpg?itok=qqWRWFw9',
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
