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
          <Link to='/' className={link, navLink}>Главная</Link>
        </li>

        <li className={listItem}>
          <Link to='/about' className={link, navLink}>О тренере</Link>
        </li>

        <li className={listItem}>
          <Link to='/services' className={link, navLink}>Услуги</Link>
          <div className={navDropDown}>
            <Link to='/services/online-training' className={dropDownLink}>Онлайн тренировка</Link>
            <Link to='/services/training-plan' className={dropDownLink}>Программа тренировок</Link>
            <Link to='/services/nutrition-plan' className={dropDownLink}>Правильное питание</Link>
            <Link to='/services/fitness-clothing' className={dropDownLink}>Одежда для фитнесса</Link>
            <Link to='/services/' className={dropDownLink}>Другие услуги</Link>
          </div>
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