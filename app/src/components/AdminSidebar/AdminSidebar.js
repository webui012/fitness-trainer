import React from 'react';
import NavSidebar from './NavSidebar';
import AdminSidebarData from './AdminSidebarData';
import './AdminSidebar.scss';

const AdminSidebar = () => {
  const tabs = AdminSidebarData.tabs;

  return (
    <div className='admin-sidebar'>
      <NavSidebar data={tabs} />
    </div>
  )
}



export default AdminSidebar;
