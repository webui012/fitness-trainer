import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import Logo from 'Components'

const FooterData = {
  logo: Logo,

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
      name: 'Форум',
      url: '/forum',
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
  copyright: '2017 All Rights Reserved',
}

export default FooterData;
