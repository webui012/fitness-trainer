import Logo from 'Components'

const HeaderData = {
  logo: Logo,

  navigation: [
    {
      name: 'AboutUs',
      url: '/aboutus',
    },
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

export default HeaderData;
