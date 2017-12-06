import React, { Component } from 'react'
import './NutritionBlock.scss'
import Text from '../Text/Text.js'

const NutritionBlock = props =>
  <div className='titlenutr'>
    <i class='fa fa-sliders fa-2x' aria-hidden='true'></i>
    <p className='work work-link'>Персонализация</p>
    <Text content='Пользовательские рецепты, соответствующие вашим предпочтениям' />
  </div>

export default NutritionBlock
