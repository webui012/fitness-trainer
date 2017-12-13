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
        foodPic = NutritionData.foodPic

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
            <p className='nut-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus nisi modi soluta inventore corrupti. Laborum magni veniam facere eius, ut similique ratione et quidem dignissimos. Minus, omnis ducimus necessitatibus consequuntur iusto, vero fuga optio ab. Laudantium harum minima obcaecati sapiente maiores molestiae, totam laboriosam. Molestiae repellat debitis veniam sed?</p>
          </div>
        </div>
        <button className='service-button'>Составить план питания</button>
      </div>
    </section>
  )
}
export default Nutrition
