import React, { Component } from 'react'
import styles from './Navigation.scss'
import { Link } from 'react-router-dom';

const Navigation = props => {
  const listItem = styles['nav-list-item'],
        navLink = styles['nav-link'],
        navList = styles['nav-list'],
        link = styles.link,
        nav = styles.nav,
        navDropDown = styles['nav-link-menu'],
        dropDownLink = styles['dropdown-link']


  return (
    <nav className={nav}>
      <ul className={navList}>
        <li className={listItem}>
          <Link to='/' className={navLink}>Главная</Link>
        </li>

        <li className={listItem}>
          <Link to='/about' className={navLink}>О тренере</Link>
        </li>

        <li className={listItem}>
          <Link to='/services' className={navLink}>Услуги</Link>
          <div className={navDropDown}>
            <Link to='/services/online' className={dropDownLink}>Онлайн тренировка</Link>
            <Link to='/services/training-plan' className={dropDownLink}>Программа тренировок</Link>
              <Link to='/services/nutrition' className={dropDownLink}>Правильное питание</Link>
            <Link to='/services/fitness-clothing' className={dropDownLink}>Одежда для фитнесса</Link>
            <Link to='/services/' className={dropDownLink}>Другие услуги</Link>
          </div>
        </li>

        <li className={listItem}>
          <Link to='/sales' className={navLink}>Акции</Link>
        </li>

        <li className={listItem}>
          <Link to='/forum' className={navLink}>Форум</Link>
        </li>

        <li className={listItem}>
          <Link to='/contacts' className={navLink}>Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
