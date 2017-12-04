import React, { Component } from 'react'
import './style.scss'
import {Link} from 'react-router-dom'


const Navigation = props => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <Link to="/home" className='link nav-link'>
            Главная
          </Link>
        </li>

        <li className='nav-list-item'>
          <a href='#' className='link nav-link'>О тренере</a>
        </li>

        <li className='nav-list-item'>
          <Link to="/services" className='link nav-link'>
            Услуги
          </Link>
        </li>

        <li className='nav-list-item'>
          <a href='#' className='link nav-link'>Акции</a>
        </li>

        <li className='nav-list-item'>
          <a href='#' className='link nav-link'>Форум</a>
        </li>

        <li className='nav-list-item'>
          <a href='#' className='link nav-link'>Контакты</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
