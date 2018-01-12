import Logo from '../../components/Logo/Logo';


const HeaderCabinetUserData = {
  logo: Logo,

  navigation: [
    {
      name: 'Замеры',
      url: '/cabinet/user/metrics',
    },
    {
      name: 'Мои заказы',
      url: '/cabinet/user/orders',
    },
    {
      name: 'Заказать услугу',
      url: '/cabinet/user/service-order',
    },
  ],
}

export default HeaderCabinetUserData;
