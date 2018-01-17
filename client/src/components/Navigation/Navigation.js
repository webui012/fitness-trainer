import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const handleSubMenu = link => {
  if (link.submenu) {
    return <div className='nav-link-menu'>{renderSubMenu(link.submenu)}</div>;
  }
};

const renderSubMenu = (submenu = []) => {
  const menu = submenu.map((link, i) =>
    <Link key={i} to={link.url} className='dropdown-link'>{link.name}</Link>
  );

  return menu;
};

const Navigation = props => {
  const links = props.data;

  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {links.map((link, i) =>
          <li key={i} className='nav-list-item'>
            <Link to={link.url} className='nav-link'>{link.name}</Link>
            {handleSubMenu(link)}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
