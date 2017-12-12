import React from 'react'
import {
  Image,
  Text,
  Button,
  Slider
} from 'Components';
import YouTube from '@u-wave/react-youtube';
import TrainingPlanSectionData from ./TrainingPlanSectionData;
import './TrainingPlanSection.scss';

function TrainingPlanSection(){

  const {videoId, image, text, slider, btnText} = TrainingPlanSectionData;

  return (
    <div>
      <section className='training-plan'>
        <YouTube video={videoId} className='video' />
        <Image path={params.imgPath} description={params.description} />
        <Text content={params.text} />
        <Slider />
        <Text content={params.text} />
      </section>
      <section className='motivation'>
        <Button text={params.btnText} />
      </section>
    </div>
  )
}

export default TrainingPlanSection
