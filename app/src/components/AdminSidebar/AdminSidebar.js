import React, { PropTypes } from 'react';
import { NavSidebar } from 'Components';
import AdminSidebarData from './AdminSidebarData';
import './AdminSidebar.scss';

const AdminSidebar = () => {
  const tabs = AdminSidebarData.tabs

  return (
    <div className='admin-sidebar'>
      <NavSidebar data={tabs} />
    </div>
  )
}

AdminSidebar.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default AdminSidebar;
