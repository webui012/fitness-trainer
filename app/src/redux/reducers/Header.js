import ActionTypes from '../constants';
import { createSelector } from 'reselect'
import Logo from '../../components/Logo/Logo';

const initialState = {
  logo: "Fintess",
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
          name: 'Программа тренировок',
          url: '/services/training-plan',
        },
        {
          name: 'Правильное питание',
          url: '/services/nutrition-plan',
        },
        {
          name: 'Одежда для фитнесса',
          url: '/services/fitness-clothing',
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
      name: 'Форум',
      url: '/forum',
    },
    {
      name: 'Контакты',
      url: '/contacts',
    },
  ],
}

// Selector
export const getHeaderData = state => state.Header

// Reducer
const Header = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default Header
