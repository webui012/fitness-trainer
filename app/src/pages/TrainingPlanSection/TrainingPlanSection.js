import React from 'react'
import {
  Image,
  Text,
  Button,
  Slider
} from 'Components';
import YouTube from '@u-wave/react-youtube';
import TrainingPlanSectionData from './TrainingPlanSectionData';
import './TrainingPlanSection.scss';

function TrainingPlanSection(){

  const {
    videoId,
    image:{imgPath, description},
    text,
    slider,
    btnText } = TrainingPlanSectionData;

  return (
    <div>
      <section className='training-plan'>
        <YouTube video={videoId} className='video' />
        <Image path={imgPath} description={description} />
        <Text content={text} />
        <Slider data={slider} />
        <Text content={text} />
      </section>
      <section className='motivation'>
        <Button text={btnText} />
      </section>
    </div>
  )
}

export default TrainingPlanSection
