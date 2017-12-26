import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import './AdminCabinet.scss';

const AdminHomepage = () => <div><h1>AdminHomepage</h1></div>

const AdminAbout = () => <div><h1>AdminAbout</h1></div>

const AdminCabinet = () =>
  <Router>
    <div className='admin-cabinet'>
      <AdminLayout>
        <div>
          <h1>ADMIN CABINET</h1>
          <p> Hello, admin! </p>

        </div>

        <Switch>
          <Route exact path='/cabinet/admin/home' component={AdminHomepage} />
          <Route path='/cabinet/admin/about' component={AdminAbout} />
        </Switch>
      </AdminLayout>
    </div>
  </Router>

export default AdminCabinet;
