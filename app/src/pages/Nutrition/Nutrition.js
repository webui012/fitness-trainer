import React, {Component} from 'react';
import {
  Slider,
  NutritionItem,
  Button,
  Image
} from 'Components';
import './Nutrition.scss';

const Nutrition = props => {
  // Icons
  const icon_1 = 'https://cdn0.iconfinder.com/data/icons/infographic-bar-11/512/8-128.png',
        icon_2 = 'https://cdn0.iconfinder.com/data/icons/infographic-bar-11/512/24-128.png',
        icon_3 = 'https://cdn0.iconfinder.com/data/icons/infographic-bar-11/512/10-128.png',
        food = 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Food-Dome-128.png'
  // Slides
  const slide1 = 'https://img3.goodfon.ru/original/2560x1440/a/82/sport-healthy-food-diet.jpg',
        slide2 = 'http://www.sportobzor.ru/uploads/images/6a601d944bff23d928ef8ec5a57df52a.jpg',
        slide3 = 'https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?h=350&auto=compress&cs=tinysrgb'

  return (
    <section className='nutrition'>
      <Slider slide1={slide1} slide2={slide2} slide3={slide3} />
      <div className='nutrition-content'>
        <div className='nut-section-row'>
          <h2 className='nut-row-title'>Что вы получаете</h2>
          <div className='nut-row-wrapper'>
            <NutritionItem title='Индивидуальный подход' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laboriosam.' icon={icon_1} />
            <NutritionItem title='Стремительный рост показателей' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laboriosam.' icon={icon_2} />
            <NutritionItem title='Поддержка 24/7' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laboriosam.' icon={icon_3} />
          </div>
        </div>
        <div className='nut-section-row nut-section-bg'>
          <h2 className='nut-row-title'>Как это работает</h2>
          <div className='nut-row-wrapper'>
            <Image path={food} imageClass='photo big-photo' />
            <p className='nut-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus nisi modi soluta inventore corrupti. Laborum magni veniam facere eius, ut similique ratione et quidem dignissimos. Minus, omnis ducimus necessitatibus consequuntur iusto, vero fuga optio ab. Laudantium harum minima obcaecati sapiente maiores molestiae, totam laboriosam. Molestiae repellat debitis veniam sed?</p>
          </div>
        </div>
        <Button text='Составить план питания' />
      </div>
    </section>
  )
}
export default Nutrition
