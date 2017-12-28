import React from 'react';
import { Header } from 'Components';
import HeaderCabinetAdminData from '../components/HeaderCabinet/HeaderCabinetAdminData';

const AdminLayout = props => (
  <div className='login-layout'>
    <Header />
    <div className='layout-content'>
      {props.children}
    </div>
  </div>
  )

export default AdminLayout;
