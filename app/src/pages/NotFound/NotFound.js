import React from 'react';
import './NotFound.scss'
import { Link } from 'react-router-dom'

const NotFound = () =>
  <div className='page-wrapper not-found-wrapper'>
    <div className='page-content not-found-content'>
      <h1 className='not-found-code'>404</h1>
      <span className='not-found-text'>Страница не найдена :(</span>
      <p className='not-found-desc'>Страница, которую вы запрашиваете не существует</p>
      <Link className='not-found-link' to='/'>Вернуться на главную</Link>
    </div>
  </div>;

export default NotFound
