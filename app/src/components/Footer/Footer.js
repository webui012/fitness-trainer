import React, { Component } from 'react'
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';

import Logo from '../Logo/Logo.js'
import Navigation from '../Navigation/Navigation.js'
import styles from './Footer.scss'

const Footer = () => {
  let style = { color: '#fff' };
  return (
    <footer className={styles.footer}>
      <Logo style={style} />
      <span className={styles['logo-caption']}>Find your perfect body!</span>
      <nav className={ styles['footer-nav']}>
        <a href='#' className={styles['footer-nav-link']}>Главная</a>
        <a href='#' className={styles['footer-nav-link']}>О Тренере</a>
        <a href='#' className={styles['footer-nav-link']}>Услуги</a>
        <a href='#' className={styles['footer-nav-link']}>Акции</a>
        <a href='#' className={styles['footer-nav-link']}>Форум</a>
        <a href='#' className={styles['footer-nav-link']}>Контакты</a>
      </nav>
      <div className={styles.socials}>
        <a href='https://www.facebook.com' className={styles['social-link']}>
          <img src={facebook} alt='facebook' />
        </a>
        <a href='https://www.twitter.com' className={styles['social-link']}>
          <img src={twitter} alt='twitter' />
        </a>
        <a href='https://www.instagram.com' className={styles['social-link']}>
          <img src={instagram} alt='instagram' />
        </a>
      </div>
      <p className={styles.copyright}>&copy;2017 All Rights Reserved</p>
    </footer>
  )
}

export default Footer
