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

import { ALL, USER, ADMIN } from '../../redux/constants';

import MainLayout from '../../layouts/MainLayout';
import LoginLayout from '../../layouts/LoginLayout';
import UserLayout from '../../layouts/UserLayout';
import AdminLayout from '../../layouts/AdminLayout';

export default [
  {
    path: '/',
    exact: true,
    page: Homepage,
    role: ALL,
    layout: MainLayout,
    id: 't0y9pNF1Fv'
  },
  {
    path: '/about',
    exact: true,
    page: About,
    role: ALL,
    layout: MainLayout,
    id: 'Ukv7NHSQlM'
  },
  {
    path: '/services/online-training',
    exact: true,
    page: Online,
    role: ALL,
    layout: MainLayout,
    id: 'aA8wmJaqKa'
  },
  {
    path: '/services/nutrition-plan',
    exact: true,
    page: Nutrition,
    role: ALL,
    layout: MainLayout,
    id: 'g3osQqyZau'
  },
  {
    path: '/services',
    exact: true,
    page: Services,
    role: ALL,
    layout: MainLayout,
    id: 'qnapXP4om6'
  },
  {
    path: '/sales',
    exact: true,
    page: Sales,
    role: ALL,
    layout: MainLayout,
    id: 'iFXEEri2iu'
  },
  {
    path: '/contacts',
    exact: true,
    page: Contacts,
    role: ALL,
    layout: MainLayout,
    id: '8OsJDwHj1j'
  },
  {
    path: '/login',
    exact: true,
    page: LoginPage,
    role: ALL,
    layout: LoginLayout,
    id: 'ydY8jq0ah9'
  },
  {
    path: '/signup',
    exact: true,
    page: SignupPage,
    role: ALL,
    layout: LoginLayout,
    id: 'K7RsR4thm1'
  },
  {
    path: '/cabinet/admin',
    exact: true,
    page: AdminCabinet,
    role: ADMIN,
    layout: AdminLayout,
    id: 'ys8goGn387'
  },
  {
    path: '/cabinet/admin/orders',
    exact: true,
    page: AdminOrders,
    role: ADMIN,
    layout: AdminLayout,
    id: 'fcJpTaRz6N'
  },
  {
    path: '/cabinet/user',
    exact: true,
    page: UserCabinet,
    role: USER,
    layout: UserLayout,
    id: 'Nx5r5mLan0'
  },
  {
    path: '/cabinet/user/metrics',
    exact: true,
    page: AboutUs,
    role: USER,
    layout: UserLayout,
    id: 'fcJpTBRz6N'
  },
  {
    path: '/cabinet/user/orders',
    exact: true,
    page: UserOrders,
    role: USER,
    layout: UserLayout,
    id: 'fcJpTaRz6Nsq'
  },
  {
    path: '/cabinet/user/service-order',
    exact: true,
    page: ServiceOrder,
    role: USER,
    layout: UserLayout,
    id: 'f1rTaTz4Nbt'
  },
  {
    path: '',
    exact: false,
    page: NotFound,
    role: ALL,
    layout: LoginLayout,
    id: 'fcJpT0007N'
  },
];
