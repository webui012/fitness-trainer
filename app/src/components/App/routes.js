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
  TrainingPlanSection,
    Order,
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
    component: About,
    layout: MainLayout
  },
  {
    path: '/services',
    component: Services,
    layout: MainLayout
  },
  {
    path: '/services/training-plan',
    component: TrainingPlanSection,
    layout: MainLayout
  },
  {
    path: '/services/online-plan',
    component: Online,
    layout: MainLayout
  },
  {
    path: '/sales',
    component: Sales,
    layout: MainLayout
  },
  {
    path: '/forum',
    component: Forum,
    layout: MainLayout
  },
  {
    path: '/contacts',
    component: Contacts,
    layout: MainLayout
  },
    {
        path: '/order',
        component: Order,
        layout: MainLayout
    },
  {
    path: '/login',
    component: LoginPage,
    layout: LoginLayout
  },
  {
    path: '/signup',
    component: SignupPage,
    layout: LoginLayout
  },

]

export default routes;
