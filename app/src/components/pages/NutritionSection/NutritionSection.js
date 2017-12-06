import React, {Component} from 'react'
import Text from '../../Text/Text.js'
import Slider from '../../Slider/Slider.js'
import NutritionBlock from '../../NutritionBlock/NutritionBlock.js'
import styles from './NutritionSection.scss'
import Button from '../../Button/Button';


const NutritionSection = props =>
    <div className={styles.nutrition}>
        <Slider />
        <section className='title'>
            <h2 className='title-work'>Как Это Работает</h2>
            <div className='title-nutrition-block'>
                <NutritionBlock />
                <NutritionBlock />
                <NutritionBlock />
            </div>
        </section>
        <section className='getwrap'>
            <h3 className='title-work'>Что Вы Получаете</h3>
            <img src='https://www.sutent.com/sites/default/files/internal-sections-images/eat-right.png' alt='img' className='nutrition-list-img' />
            <Text content = 'Вы получите индивидуальные планы еды, которые упростят вашу жизнь, порадуют ваши вкусовые рецепторы и фигуру.' />
            <Text content = 'Вы получите индивидуальные планы еды, которые упростят вашу жизнь, порадуют ваши вкусовые рецепторы и фигуру.' />
            <Text content = 'Вы получите индивидуальные планы еды, которые упростят вашу жизнь, порадуют ваши вкусовые рецепторы и фигуру.' />
            <Button text='Заказать' classStyle={styles[`service-button`]} />
        </section>
    </div>
export default NutritionSection