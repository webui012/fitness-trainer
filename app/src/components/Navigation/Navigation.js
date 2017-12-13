import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = props => {
  const links = props.data
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {links.map((link, i) => {
          let menu;
          // (link.menu || []).map
          if (link.submenu) {
             menu = link.submenu.map((link, i) => {
              return (
                <Link key={i} to={link.url} className='dropdown-link'>{link.name}</Link>
              )
            })
          }

          return (
            <li key={i} className='nav-list-item'>
              <Link to={link.url} className='nav-link'>{link.name}</Link>
              <div className='nav-link-menu'>{menu}</div>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
