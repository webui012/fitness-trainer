import React, { Component } from 'react'
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import {
  Logo,
  Navigation
} from 'Components';

/*import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'*/
import './Footer.scss'

const Footer = () => {
  let style = { color: '#fff' };
  return (
    <footer className='footer'>
      <Logo style={style} />
      <span className='logo-caption'>Find your perfect body!</span>
      {/* Need to be presented as a Navigation component */}
      <nav className='footer-nav'>
        <a href='#' className='footer-nav-link'>Главная</a>
        <a href='#' className='footer-nav-link'>О Тренере</a>
        <a href='#' className='footer-nav-link'>Услуги</a>
        <a href='#' className='footer-nav-link'>Акции</a>
        <a href='#' className='footer-nav-link'>Форум</a>
        <a href='#' className='footer-nav-link'>Контакты</a>
      </nav>
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
