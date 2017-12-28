import React from 'react';
import { HeaderCabinet } from 'Components';
import HeaderCabinetAdminData from '../components/HeaderCabinet/HeaderCabinetAdminData';

const AdminLayout = props => (
  <div className='login-layout'>
    <HeaderCabinet data={HeaderCabinetAdminData} />
    <div className='layout-content'>
      {props.children}
    </div>

export default AdminLayout;
