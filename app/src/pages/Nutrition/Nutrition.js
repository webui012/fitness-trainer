import React from 'react';
import {Link} from 'react-router-dom';

import NutritionData from './NutritionData';
import {
      NutritionItem,
      Slider,
} from 'Components';
import './Nutrition.scss';

const Nutrition = () => {
    const { nutritions,
            textTitle,
            textNutrition,
            slider,
            buttonText,
            foodPic,
            foodText} = NutritionData;

    const text = textNutrition.map((snippet,index)=>
        <p key={index}>{snippet}</p>
    )

    return (
            <section className='nutrition'>
                <Slider data={slider} className='nutrition-slider' />
                <div className='nutrition-content'>
                    <div className='nut-section-row'>
                        <h2 className='nut-row-title'>{text}</h2>
                        <div className='nut-row-wrapper'>
                            {nutritions.map((nutrition, i) => {
                                return (
                                    <NutritionItem key={i} title={nutrition.title} text={nutrition.text} icon={nutrition.iconUrl} />
                                )
                            })}
                        </div>
                    </div>

                    <div className='nut-section-row nut-section-bg'>
                        <h2 className='nut-row-title'>{textTitle}</h2>
                        <div className='nut-row-wrapper'>
                            <img src={foodPic} className='photo big-photo' alt='nutrition' />
                            <p className='nut-description'>{foodText}</p>
                        </div>
                    </div>
                    <Link to='/cabinet/user/service-order'>
                        <button className='service-button'>{buttonText}</button>
                    </Link>
                </div>
            </section>
    )
}
export default Nutrition
