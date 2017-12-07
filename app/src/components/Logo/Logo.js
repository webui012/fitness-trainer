import React from 'react';
import './Logo.scss';

const Logo = props =>
  <div className='logo-wrapper'>
    <a href='#' className='logo' style={props.style}>Fitness</a>
  </div>;

export default Logo;
