import React, { Component } from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <Link to='/' className='nav-link'>Главная</Link>
        </li>

        <li className='nav-list-item'>
          <Link to='/about' className='nav-link'>О тренере</Link>
        </li>

        <li className='nav-list-item'>
          <Link to='/services' className='nav-link'>Услуги</Link>
          <div className='nav-link-menu'>
            <Link to='/services/online-training' className='dropdown-link'>Онлайн тренировка</Link>
            <Link to='/services/training-plan' className='dropdown-link'>Программа тренировок</Link>
            <Link to='/services/nutrition-plan' className='dropdown-link'>Правильное питание</Link>
            <Link to='/services/fitness-clothing' className='dropdown-link'>Одежда для фитнесса</Link>
            <Link to='/services/' className='dropdown-link'>Другие услуги</Link>
          </div>
        </li>

        <li className='nav-list-item'>
          <Link to='/sales' className='nav-link'>Акции</Link>
        </li>

        <li className='nav-list-item'>
          <Link to='/forum' className='nav-link'>Форум</Link>
        </li>

        <li className='nav-list-item'>
          <Link to='/contacts' className='nav-link'>Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
