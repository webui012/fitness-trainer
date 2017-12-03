import React, { Component } from 'react'
import styles from './style.scss'

const Navigation = props =>
  <nav className={styles.nav}>
    <ul className={styles['nav-list']}>
      <li className={styles['nav-list-item']}>
        <a href='#' className={styles.link, styles['nav-link']}>Главная</a>
      </li>

      <li className={styles['nav-list-item']}>
        <a href='#' className={styles.link, styles['nav-link']}>О тренере</a>
      </li>

      <li className={styles['nav-list-item']}>
        <a href='#' className={styles.link, styles['nav-link']}>Услуги</a>
      </li>

      <li className={styles['nav-list-item']}>
        <a href='#' className={styles.link, styles['nav-link']}>Акции</a>
      </li>

      <li className={styles['nav-list-item']}>
        <a href='#' className={styles.link, styles['nav-link']}>Форум</a>
      </li>

      <li className={styles['nav-list-item']}>
        <a href='#' className={styles.link, styles['nav-link']}>Контакты</a>
      </li>
    </ul>
  </nav>

export default Navigation
