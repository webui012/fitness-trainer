import React from 'react'
import Header from '../../Header/Header.js'
import Footer from '../../Footer/Footer.js'
import Image from '../../Image/Image.js'
import Text from '../../Text/Text.js'
import ButtonTraining from '../../Button/Button.js'
import Slider from '../../Slider/Slider.js'
import Video from '../../Video/Video.js'
import ImageTraining from '../../../images/imageTrainingPlan.jpg'
import styles from './TrainingPlanSection.scss'

function TrainingPlanSection(){

  const params = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    description: 'training plan img',
    id: '1KGU6iB5MVE',
    slide1: 'https://www.hdwallpapers.in/walls/pushup_workout-HD.jpg',
    slide2: 'https://media.self.com/photos/5867a314bf5e49f716efe864/2:1/pass/workout-package_1.png',
    slide3: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-498315681.jpg?itok=qqWRWFw9',
    btnText: 'НАЧАТЬ ТРЕНИРОВАТЬСЯ!'
  };

  return(
    <div className = {styles.service}>
      <Video id= {params.id} />
      <Image path = {ImageTraining} description = {params.description} />
      <Text content = {params.text} />
      <Slider slide1 = {params.slide1}
            slide2 = {params.slide2}
            slide3 = {params.slide3} />
      <Text content = {params.text} />
      <div className = {styles.motivation}>
      <ButtonTraining text = {params.btnText} />
      </div>
    </div>
    )
}

export default TrainingPlanSection
