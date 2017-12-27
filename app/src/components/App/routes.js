import {
  Homepage,
  About,
  Services,
  Sales,
  Online,
  Forum,
  Contacts,
  LoginPage,
  SignupPage,
  Nutrition,
  TrainingPlanSection
} from 'Pages';

import MainLayout from '../../layouts/MainLayout'
import LoginLayout from '../../layouts/LoginLayout'

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
    path: '/services/online-plan',
    exact: true,
    component: Online,
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

]

export default routes;
