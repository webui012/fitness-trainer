import React from 'react';
import { Switch } from 'react-router-dom';

// Routes
import GuestRoute from '../../routes/GuestRoute';
import AdminRoute from '../../routes/AdminRoute';
import UserRoute from '../../routes/UserRoute';

import { guestRoutes, userRoutes, adminRoutes } from './routes';

import './App.scss';

const App = props => (
  <div className='app'>
    <Switch>
      {guestRoutes.map(r =>
        <GuestRoute
          key={r.id}
          exact={r.exact}
          path={r.path}
          layout={r.layout}
          component={r.page}
      />)}
      {adminRoutes.map(r =>
        <AdminRoute
          key={r.id}
          exact={r.exact}
          path={r.path}
          layout={r.layout}
          component={r.page}
      />)}
      {userRoutes.map(r =>
        <UserRoute
          key={r.id}
          exact={r.exact}
          path={r.path}
          layout={r.layout}
          component={r.page}
      />)}
    </Switch>
  </div>
)

export default App;
