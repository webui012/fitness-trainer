import React, {Component} from 'react';
import {Image} from 'Components';
import './NutritionItem.scss';

const NutritionItem = props =>
  <div className='nutrition-item'>
    <img src={props.icon} className='nut-photo' alt='icon' />
    <h2 className='nut-title'>{props.title}</h2>
    <p className='nut-text'>{props.text}</p>
  </div>

export default NutritionItem
