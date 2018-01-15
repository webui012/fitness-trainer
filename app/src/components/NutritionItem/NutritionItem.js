import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NutritionItem.scss';

const NutritionItem = props =>
  <Link to='/cabinet/user/service-order' className='nutrition-item'>
    <img src={props.icon} className='nut-photo' alt='icon' />
    <h2 className='nut-title'>{props.textNutrition}</h2>
    <p className='nut-text'>{props.text}</p>
  </Link>

NutritionItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    textNutrition: PropTypes.string,
    icon: PropTypes.string
}
export default NutritionItem
