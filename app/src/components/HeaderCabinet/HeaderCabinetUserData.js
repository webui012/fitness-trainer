import Logo from 'Components'

const HeaderCabinetUserData = {
  logo: Logo,

  navigation: [
    {
      name: 'Главная',
      url: '/cabinet/user/home',
    },
    {
      name: 'Замеры',
      url: '/cabinet/user/metrics',
    },
    {
      name: 'Мои тренеровки',
      url: '/cabinet/user/trainings',
    },
  ],
}

export default HeaderCabinetUserData;
