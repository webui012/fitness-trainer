import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebarData from './AdminSidebarData';

const AdminSidebar = props => {
  const links = props.data;
  return (
    <nav className='admin-sidebar'>
      <ul className='admin-sidebar-tab'>
        {links.map((link, i) => {
          return (
            <li key={i} className='admin-sidebar-item'>
              <Link to={links.url} className='admin-sidebar-link'>
                {links.title}
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </nav>
  )
}

AdminSidebar.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  key: PropTypes.number
};

export default AdminSidebar;
