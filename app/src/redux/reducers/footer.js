import ActionTypes from '../constants';
import { createSelector } from 'reselect'
import Logo from '../../components/Logo/Logo';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';

const initialState = {
  logo: 'Fitness',
  caption: 'Find your perfect body!',
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

  socials: [
    {
      url: 'https://www.facebook.com',
      name: 'facebook',
      icon: facebook
    },

    {
      url: 'https://www.twitter.com',
      name: 'twitter',
      icon: twitter
    },

    {
      url: 'https://www.instagram.com',
      name: 'instagram',
      icon: instagram
    },
  ],
  copyright: '© 2018 All Rights Reserved',
}

// Selector
export const getFooterData = state => state.footer

// Reducer
const footer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default footer
