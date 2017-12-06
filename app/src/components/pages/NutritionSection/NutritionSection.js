import React, {Component} from 'react'
import Text from '../../Text/Text.js'
import SliderNutrition from '../../SliderNutrition/SliderNutrition.js'
import NutritionBlock from '../../NutritionBlock/NutritionBlock.js'
import MotivationSection from '../../MotivationSection/MotiovationSection.js'
import Image from '../../Image/Image.js'
import styles from './NutritionSection.scss'

const NutritionSection = props =>
    <div className={styles.nutrition}>
        <SliderNutrition />
        <div className="title">
            <h2 className='title-work'>Как это работает</h2>
                <NutritionBlock />
                <NutritionBlock />
                <NutritionBlock />
        </div>
        <div className="getwrap">
            <h3 className='title-work'>Что Вы Получаете</h3>
            <Text />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnF6CH5YxvPXkEB6fehJCGFdarMFCCuBp8dmPMqvN-yQy4vsfRQ' alt='img' className='nutrition-list-img' />
        {/*<Image />*/}
        </div>

        <MotivationSection />
    </div>
export default NutritionSection