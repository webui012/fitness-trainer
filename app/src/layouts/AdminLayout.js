import React from 'react';
import { Header } from 'Containers';
import { AdminSidebar } from 'Components';
import './AdminLayout.scss';

const AdminLayout = props =>
  <div className='login-layout'>
    <Header />
    <div className='admin-layout-content'>
      {props.children}
    </div>
    <AdminSidebar />
  </div>;

export default AdminLayout;
