import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.scss';

const NavSidebar = props => {
  const links = props.data;
  return (
    <nav className='admin-sidebar'>
      <ul className='admin-sidebar-tab'>
        {links.map((link, i) => {
          return (
            <li key={i} className='admin-sidebar-item'>
              <Link to={link.url} className='admin-sidebar-link'>
                {link.title}
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </nav>
  )
};

export default NavSidebar;
