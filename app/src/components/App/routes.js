import {
  Homepage,
  About,
  AboutUs,
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
  NotFound
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
    layout: MainLayout,
    id: 't0y9pNF1Fv'
  },
  {
    path: '/about',
    exact: true,
    component: About,
    role: 'ALL',
    layout: MainLayout,
    id: 'Ukv7NHSQlM'
  },
  {
    path: '/services/training-plan',
    exact: true,
    component: TrainingPlanSection,
    role: 'ALL',
    layout: MainLayout,
    id: '73Xol5VEmi'
  },
  {
    path: '/services/online-training',
    exact: true,
    component: Online,
    role: 'ALL',
    layout: MainLayout,
    id: 'aA8wmJaqKa'
  },
  {
    path: '/services/nutrition-plan',
    exact: true,
    component: Nutrition,
    role: 'ALL',
    layout: MainLayout,
    id: 'g3osQqyZau'
  },
  {
    path: '/services',
    exact: true,
    component: Services,
    role: 'ALL',
    layout: MainLayout,
    id: 'qnapXP4om6'
  },
  {
    path: '/sales',
    exact: true,
    component: Sales,
    role: 'ALL',
    layout: MainLayout,
    id: 'iFXEEri2iu'
  },
  {
    path: '/forum',
    exact: true,
    component: Forum,
    role: 'ALL',
    layout: MainLayout,
    id: 's872qTU5GF'
  },
  {
    path: '/contacts',
    exact: true,
    component: Contacts,
    role: 'ALL',
    layout: MainLayout,
    id: '8OsJDwHj1j'
  },
  {
    path: '/login',
    exact: true,
    component: LoginContainer,
    role: 'ALL',
    layout: LoginLayout,
    id: 'ydY8jq0ah9'
  },
  {
    path: '/signup',
    exact: true,
    component: SignupPage,
    role: 'ALL',
    layout: LoginLayout,
    id: 'K7RsR4thm1'
  },
  {
    path: '/cabinet/user',
    exact: true,
    component: UserCabinet,
    role: 'USER',
    layout: UserLayout,
    id: 'Nx5r5mLan0'
  },
  {
    path: '/cabinet/admin',
    exact: true,
    component: AdminCabinet,
    role: 'ADMIN',
    layout: AdminLayout,
    id: 'ys8goGn387'
  },
  {
    path: '/cabinet',
    exact: true,
    component: UserCabinet,
    role: 'USER',
    layout: UserLayout,
    id: 'qU2ZQZ1fSP'
  },
  {
    path: '/cabinet/user/metrics',
    exact: true,
    component: AboutUs,
    role: 'USER',
    layout: UserLayout,
    id: 'fcJpTBRz6N'
  },
  {
    path: '',
    exact: false,
    component: NotFound,
    role: 'ALL',
    layout: LoginLayout,
    id: 'fcJpT0007N'
  },
]

export default routes;
