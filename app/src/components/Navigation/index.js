import React, { Component } from 'react'
import styles from './style.scss'
import {
  Link
} from 'react-router-dom';

const Navigation = props =>
  <nav className={styles.nav}>
    <ul className={styles['nav-list']}>
      <li className={styles['nav-list-item']}>
        <Link to='/' className={styles.link, styles['nav-link']}>Главная</Link>
      </li>

      <li className={styles['nav-list-item']}>
        <Link to='/about' className={styles.link, styles['nav-link']}>О тренере</Link>
      </li>

      <li className={styles['nav-list-item']}>
        <Link to='/services' className={styles.link, styles['nav-link']}>Услуги</Link>
      </li>

      <li className={styles['nav-list-item']}>
        <Link to='/sales' className={styles.link, styles['nav-link']}>Акции</Link>
      </li>

      <li className={styles['nav-list-item']}>
        <Link to='/forum' className={styles.link, styles['nav-link']}>Форум</Link>
      </li>

      <li className={styles['nav-list-item']}>
        <Link to='/contacts' className={styles.link, styles['nav-link']}>Контакты</Link>
      </li>
    </ul>
  </nav>

export default Navigation
