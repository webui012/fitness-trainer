import React, { Component } from 'react'
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import {
  Logo,
  Navigation
} from 'Components';
import './Footer.scss'

const Footer = () => {
  let style = { color: '#fff' };
  return (
    <footer className='footer'>
      <Logo style={style} />
      <span className='logo-caption'>Find your perfect body!</span>
      <Navigation />
      <div className='socials'>
        <a href='https://www.facebook.com' className='social-link'>
          <img src={facebook} alt='facebook' />
        </a>
        <a href='https://www.twitter.com' className='social-link'>
          <img src={twitter} alt='twitter' />
        </a>
        <a href='https://www.instagram.com' className='social-link'>
          <img src={instagram} alt='instagram' />
        </a>
      </div>
      <p className='copyright'>&copy;2017 All Rights Reserved</p>
    </footer>
  )
}

export default Footer
