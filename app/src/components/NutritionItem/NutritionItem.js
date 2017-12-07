import React, {Component} from 'react'
import Image from '../Image/Image'
import './NutritionItem.scss'

const NutritionItem = props =>
  <div className='nutrition-item'>
    <Image path={props.icon} imageClass='nut-photo' description='icon' />
    <h2 className='nut-title'>{props.title}</h2>
    <p className='nut-text'>{props.text}</p>
  </div>

export default NutritionItem
