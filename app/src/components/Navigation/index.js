import React, { Component } from 'react'
import './style.scss'

const Navigation = props => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <a href='#' className='link nav-link'>Главная</a>
        </li>

        <li className='nav-list-item'>
          <a href='#' className='link nav-link'>О тренере</a>
        </li>

        <li className='nav-list-item'>
          <a href='#' className='link nav-link'>Услуги</a>
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
