import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = props => {
  const links = props.data
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {links.map((link, i) => {
          return (
            <li key={i} className='nav-list-item'>
              <Link to={link.url} className='nav-link'>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
