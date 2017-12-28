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

import MainLayout from '../../layouts/MainLayout';
import LoginLayout from '../../layouts/LoginLayout';
import UserLayout from '../../layouts/UserLayout';
import AdminLayout from '../../layouts/AdminLayout';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage,
    layout: MainLayout
  },
  {
    path: '/about',
    exact: true,
    component: About,
    layout: MainLayout
  },
  {
    path: '/services',
    exact: true,
    component: Services,
    layout: MainLayout
  },
  {
    path: '/services/training-plan',
    exact: true,
    component: TrainingPlanSection,
    layout: MainLayout
  },
  {
    path: '/services/online-training',
    exact: true,
    component: Online,
    layout: MainLayout
  },
  {
    path: '/services/nutrition-plan',
    exact: true,
    component: Nutrition,
    layout: MainLayout
  },
  {
    path: '/sales',
    exact: true,
    component: Sales,
    layout: MainLayout
  },
  {
    path: '/forum',
    exact: true,
    component: Forum,
    layout: MainLayout
  },
  {
    path: '/contacts',
    exact: true,
    component: Contacts,
    layout: MainLayout
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    layout: LoginLayout
  },
  {
    path: '/signup',
    exact: true,
    component: SignupPage,
    layout: LoginLayout
  },
  {
    path: '/cabinet/user',
    exact: true,
    component: UserCabinet,
    layout: UserLayout
  },
  {
    path: '/cabinet/admin',
    exact: true,
    component: AdminCabinet,
    layout: AdminLayout
  },
  {
    path: '/cabinet/admin/home',
    exact: true,
    component: Cabinet,
    layout: AdminLayout
  },
  // {
  //   path: '/aboutus',
  //   exact: true,
  //   component: AboutUs,
  //   layout: MainLayout
  // },
]

export default routes;
