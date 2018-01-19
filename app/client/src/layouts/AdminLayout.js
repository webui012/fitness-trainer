import React from 'react';
import { Header } from 'Containers';
import HeaderCabinetAdminData from '../components/HeaderCabinet/HeaderCabinetAdminData';
import { AdminSidebar } from '../components';

const AdminLayout = props =>
  <div className='admin-layout'>
    <Header />
    <div className='layout-content'>
      <AdminSidebar />
      {props.children}
    </div>
  </div>

export default AdminLayout;
