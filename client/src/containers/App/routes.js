import {
  Homepage,
  AdminOrders,
  UserOrders,
  About,
  AboutUs,
  AdminCabinet,
  UserCabinet,
  Services,
  Sales,
  Online,
  Contacts,
  SignupPage,
  Nutrition,
  ServiceOrder,
  LoginPage,
  NotFound
} from 'Pages';

import MainLayout from '../../layouts/MainLayout';
import LoginLayout from '../../layouts/LoginLayout';
import UserLayout from '../../layouts/UserLayout';
import AdminLayout from '../../layouts/AdminLayout';

export const guestRoutes = [
  {
    path: '/',
    exact: true,
    page: Homepage,
    layout: MainLayout,
    id: 't0y9pNF1Fv'
  },
  {
    path: '/about',
    exact: true,
    page: About,
    layout: MainLayout,
    id: 'Ukv7NHSQlM'
  },
  {
    path: '/services/online-training',
    exact: true,
    page: Online,
    layout: MainLayout,
    id: 'aA8wmJaqKa'
  },
  {
    path: '/services/nutrition-plan',
    exact: true,
    page: Nutrition,
    layout: MainLayout,
    id: 'g3osQqyZau'
  },
  {
    path: '/services',
    exact: true,
    page: Services,
    layout: MainLayout,
    id: 'qnapXP4om6'
  },
  {
    path: '/sales',
    exact: true,
    page: Sales,
    layout: MainLayout,
    id: 'iFXEEri2iu'
  },
  {
    path: '/contacts',
    exact: true,
    page: Contacts,
    layout: MainLayout,
    id: '8OsJDwHj1j'
  },
  {
    path: '/login',
    exact: true,
    page: LoginPage,
    layout: LoginLayout,
    id: 'ydY8jq0ah9'
  },
  {
    path: '/signup',
    exact: true,
    page: SignupPage,
    layout: LoginLayout,
    id: 'K7RsR4thm1'
  }
]

export const adminRoutes = [
  {
    path: '/cabinet/admin',
    exact: true,
    page: AdminCabinet,
    layout: AdminLayout,
    id: 'ys8goGn387'
  },
  {
    path: '/cabinet/admin/orders',
    exact: true,
    page: AdminOrders,
    layout: AdminLayout,
    id: 'fcJpTaRz6N'
  }
]

export const userRoutes = [
  {
    path: '/cabinet/user',
    exact: true,
    page: UserCabinet,
    layout: UserLayout,
    id: 'Nx5r5mLan0'
  },
  {
    path: '/cabinet/user/metrics',
    exact: true,
    page: AboutUs,
    layout: UserLayout,
    id: 'fcJpTBRz6N'
  },
  {
    path: '/cabinet/user/orders',
    exact: true,
    page: UserOrders,
    layout: UserLayout,
    id: 'fcJpTaRz6Nsq'
  },
  {
    path: '/cabinet/user/service-order',
    exact: true,
    page: ServiceOrder,
    layout: UserLayout,
    id: 'f1rTaTz4Nbt'
  },
  {
    path: '',
    exact: false,
    page: NotFound,
    layout: LoginLayout,
    id: 'fcJpT0007N'
  }
]
