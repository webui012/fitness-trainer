import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom';
import UserLayout from '../../layouts/UserLayout'

const UserHomepage = () => <div><h1>UserHomepage</h1></div>

const UserAbout = () => <div><h1>UserAbout</h1></div>

const UserCabinet = () =>
  <Router>
    <div className='user-cabinet'>
      <UserLayout>
        <h1>USER</h1>
        <Switch>
          <Route path='/cabinet/user/home' component={UserHomepage} />
          <Route path='/cabinet/user/about' component={UserAbout} />
        </Switch>
      </UserLayout>
    </div>
  </Router>

export default UserCabinet;
