import React, {Component} from 'react';
import {
  Slider,
  NutritionItem,
} from 'Components';
import NutritionData from './NutritionData'
import './Nutrition.scss';

const Nutrition = props => {
  const nutritions = NutritionData.nutritions,
        slides = NutritionData.slides,
        sliderParams = NutritionData.sliderParams,
        foodPic = NutritionData.foodPic,
        foodText = NutritionData.foodText

  return (
    <section className='nutrition'>
      <Slider slides={slides} sliderParams={sliderParams} />
      <div className='nutrition-content'>
        <div className='nut-section-row'>
          <h2 className='nut-row-title'>Что вы получаете</h2>
          <div className='nut-row-wrapper'>
            {nutritions.map((nutrition, i) => {
              return (
                <NutritionItem key={i} title={nutrition.title} text={nutrition.text} icon={nutrition.iconUrl} />
              )
            })}
          </div>
        </div>
        <div className='nut-section-row nut-section-bg'>
          <h2 className='nut-row-title'>Как это работает</h2>
          <div className='nut-row-wrapper'>
            <img src={foodPic} className='photo big-photo' alt='nutrition' />
            <p className='nut-description'>{foodText}</p>
          </div>
        </div>
        <button className='service-button'>Составить план питания</button>
      </div>
    </section>
  )
}
export default Nutrition
