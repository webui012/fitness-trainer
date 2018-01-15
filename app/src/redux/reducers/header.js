import ActionTypes from '../constants';
import { createSelector } from 'reselect'

const initialState = {
  logo: 'Fitness',
  navigation: [
    {
      name: 'Главная',
      url: '/',
    },
    {
      name: 'О тренере',
      url: '/about',
    },
    {
      name: 'Услуги',
      url: '/services',
      submenu: [
        {
          name: 'Онлайн тренировка',
          url: '/services/online-training',
        },
        {
          name: 'Правильное питание',
          url: '/services/nutrition-plan',
        },
        {
          name: 'Другие услуги',
          url: '/services/',
        },
      ]
    },
    {
      name: 'Акции',
      url: '/sales',
    },
    {
      name: 'Контакты',
      url: '/contacts',
    },
  ],
}

// Selector
export const getHeaderData = state => state.header

// Reducer
const header = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default header
