import React, { Component } from 'react'
import styles from './style.scss'
import { Link } from 'react-router-dom';

const Navigation = props => {
  const listItem = styles['nav-list-item'],
        navLink = styles['nav-link'],
        navList = styles['nav-list'],
        link = styles.link,
        nav = styles.nav

  return (
    <nav className={nav}>
      <ul className={navList}>
        <li className={listItem}>
          <Link to='/' className={link, navLink}>Главная</Link>
        </li>

        <li className={listItem}>
          <Link to='/about' className={link, navLink}>О тренере</Link>
        </li>

        <li className={listItem}>
          <Link to='/services' className={link, navLink}>Услуги</Link>
        </li>

        <li className={listItem}>
          <Link to='/sales' className={link, navLink}>Акции</Link>
        </li>

        <li className={listItem}>
          <Link to='/forum' className={link, navLink}>Форум</Link>
        </li>

        <li className={listItem}>
          <Link to='/contacts' className={link, navLink}>Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
