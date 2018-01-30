import ActionTypes from '../constants';
import { createSelector } from 'reselect';
import { HOMEPAGE_REQUEST, HOMEPAGE_SUCCEEDED, HOMEPAGE_FAILED } from '../constants';

// const initialState = {
//   isLoading: false,
//   data: {
//     slider: {
//       slides: [
//         {
//           url: 'https://www.hdwallpapers.in/walls/pushup_workout-HD.jpg',
//           alt: 'Pushup Workout'
//         },
//
//          {
//           url: 'https://media.self.com/photos/5867a314bf5e49f716efe864/2:1/pass/workout-package_1.png',
//           alt: 'Workout Package'
//         },
//
//          {
//           url: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-498315681.jpg?itok=qqWRWFw9',
//           alt: 'Running Workout'
//         }
//       ],
//
//       sliderParams: {
//         containerClass: 'slider',
//         paginationCustomizedClass: 'pagination',
//         autoplay: true,
//         pagination: {
//           el: '.swiper-pagination',
//           type: 'bullets',
//           clickable: true
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//         },
//         spaceBetween: 0,
//         speed: 1000,
//         loop: true,
//       }
//     }
//   }
// };

const initialState = {
  isLoading: false,
  data: {
    slider: {
      slides: [],
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
}

// Selector
export const getHomePageData = state => state.homePage.data;
export const getLoadingStatus = state => state.homePage.isLoading;

// Reducer
const homePage = (state = initialState, action) => {
  switch (action.type) {
    case HOMEPAGE_REQUEST:
      return { ...state, isLoading: action.isLoading }

    case HOMEPAGE_SUCCEEDED:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data
      }

    default:
      return state;
  }
}

export default homePage;
