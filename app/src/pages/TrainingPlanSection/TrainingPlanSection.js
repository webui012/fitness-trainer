import React from 'react'
import {
  Image,
  Text,
  Button,
  Slider
} from 'Components';
import YouTube from '@u-wave/react-youtube';
import './TrainingPlanSection.scss';

function TrainingPlanSection(){

  const params = {
    videoId: '1KGU6iB5MVE',
    imgPath: '../../../images/imageTrainingPlan.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    description: 'training plan img',
    slide1: 'https://www.hdwallpapers.in/walls/pushup_workout-HD.jpg',
    slide2: 'https://media.self.com/photos/5867a314bf5e49f716efe864/2:1/pass/workout-package_1.png',
    slide3: 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-498315681.jpg?itok=qqWRWFw9',
    btnText: 'НАЧАТЬ ТРЕНИРОВАТЬСЯ!',
  };

  return (
    <div>
      <section className='training-plan'>
        <YouTube video='duXyGlVSacM' className='video' />
        <Image path={params.imgPath} description={params.description} />
        <Text content={params.text} />
        <Slider
            slide1={params.slide1}
            slide2={params.slide2}
            slide3={params.slide3} />
        <Text content={params.text} />
      </section>
      <section className='motivation'>
        <Button text={params.btnText} />
      </section>
    </div>
  )
}

export default TrainingPlanSection
