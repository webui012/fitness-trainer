import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NutritionItem.scss';

const NutritionItem = props =>
  <div className='nutrition-item'>
    <img src={props.icon} className='nut-photo' alt='icon' />
    <h2 className='nut-title'>{props.textNutrition}</h2>
    <p className='nut-text'>{props.text}</p>
  </div>

NutritionItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    textNutrition: PropTypes.string,
    icon: PropTypes.string
}
export default NutritionItem
