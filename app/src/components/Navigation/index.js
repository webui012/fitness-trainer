import React, { Component } from 'react'
import './style.scss'

const Navigation = () => {
  return (
    <nav className='nav'>
      <a href='#' className='link nav-link'>Главная</a>
      <a href='#' className='link nav-link'>О тренере</a>
      <a href='#' className='link nav-link'>Услуги</a>
      <a href='#' className='link nav-link'>Акции</a>
      <a href='#' className='link nav-link'>Форум</a>
      <a href='#' className='link nav-link'>Контакты</a>
    </nav>
  )
}

export default Navigation
