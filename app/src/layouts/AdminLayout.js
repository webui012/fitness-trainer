import React from 'react';
import { Header } from 'Containers';
import HeaderCabinetAdminData from '../components/HeaderCabinet/HeaderCabinetAdminData';
// import AdminSidebar from '../components';

const AdminLayout = props => (
  <div className='login-layout'>
    <Header />
    {/* <AdminSidebar /> */}
    <div className='layout-content'>
      {props.children}
    </div>
  </div>
  )

export default AdminLayout;
