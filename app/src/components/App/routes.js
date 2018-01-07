import {
  Homepage,
  About,
  Cabinet,
  AdminCabinet,
  UserCabinet,
  Services,
  Sales,
  Online,
  Forum,
  Contacts,
  LoginPage,
  SignupPage,
  Nutrition,
  TrainingPlanSection,
  AboutUs
} from 'Pages';
import LoginContainer from '../../containers/LoginContainer';

import MainLayout from '../../layouts/MainLayout';
import LoginLayout from '../../layouts/LoginLayout';
import UserLayout from '../../layouts/UserLayout';
import AdminLayout from '../../layouts/AdminLayout';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/about',
    exact: true,
    component: About,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/services/training-plan',
    exact: true,
    component: TrainingPlanSection,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/services/online-training',
    exact: true,
    component: Online,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/services/nutrition-plan',
    exact: true,
    component: Nutrition,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/services',
    exact: true,
    component: Services,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/sales',
    exact: true,
    component: Sales,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/forum',
    exact: true,
    component: Forum,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/contacts',
    exact: true,
    component: Contacts,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/login',
    exact: true,
    component: LoginContainer,
    role: 'ALL',
    layout: LoginLayout
  },
  {
    path: '/signup',
    exact: true,
    component: SignupPage,
    role: 'ALL',
    layout: LoginLayout
  },
  {
    path: '/cabinet',
    exact: true,
    component: LoginContainer,
    role: 'ALL',
    layout: MainLayout
  },
  {
    path: '/cabinet/user',
    exact: true,
    component: UserCabinet,
    role: 'USER',
    layout: UserLayout
  },
  {
    path: '/cabinet/admin',
    exact: true,
    component: AdminCabinet,
    role: 'ADMIN',
    layout: AdminLayout
  },
  {
    path: '/cabinet/admin/home',
    exact: true,
    component: Cabinet,
    role: 'ADMIN',
    layout: AdminLayout
  },
]

export default routes;
