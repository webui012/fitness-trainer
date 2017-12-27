import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { UserCards, AdminSidebar } from 'Components';
import './AdminCabinet.scss';

const AdminHomepage = () => <div><h1>AdminHomepage</h1></div>

const AdminAbout = () => <div><h1>AdminAbout</h1></div>

const AdminCabinet = () =>
  <Router>
    <div className='admin-cabinet'>
      <AdminLayout>
        <UserCards />
        <AdminSidebar />

        <Switch>
          <Route exact path='/cabinet/admin/home' component={AdminHomepage} />
          <Route path='/cabinet/admin/about' component={AdminAbout} />
        </Switch>
      </AdminLayout>
    </div>
  </Router>

export default AdminCabinet;
