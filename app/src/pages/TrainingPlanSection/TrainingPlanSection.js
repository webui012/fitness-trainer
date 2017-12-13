import React from 'react'
import {
 // Image,
 // Text,
  Button,
  Slider
} from 'Components';
import YouTube from '@u-wave/react-youtube';
import TrainingPlanSectionData from './TrainingPlanSectionData';
import './TrainingPlanSection.scss';

function TrainingPlanSection(){

  const {
    videoId,
    image,
    text,
    slider,
    btnText } = TrainingPlanSectionData;

  //const trainigImage =
  const trainingText = text.map(snippet=>
    <p>{snippet}</p>
  )

  const trainingImage = image.map(pic=>
    <img src={pic.imgPath} alt={pic.description} />
    )

  return (
    <div>
      <section className='training-plan'>
        <YouTube video={videoId} className='video' />
        <div>{trainingImage}</div>
        <div>{trainingText}</div>
        <Slider data={slider} />
        <div>{trainingText}</div>
      </section>
      <section className='motivation'>
        <Button text={btnText} />
      </section>
    </div>
  )
}

export default TrainingPlanSection
