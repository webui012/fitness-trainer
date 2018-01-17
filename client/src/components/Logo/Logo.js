import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = props =>
  <div className='logo-wrapper'>
    <Link to='/' className='logo'>{props.data}</Link>
  </div>;

export default Logo;
