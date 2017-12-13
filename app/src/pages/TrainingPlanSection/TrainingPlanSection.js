import React from 'react'
import { Slider } from 'Components';
import YouTube from '@u-wave/react-youtube';
import TrainingPlanSectionData from './TrainingPlanSectionData';
import './TrainingPlanSection.scss';

function TrainingPlanSection(){

  const {
    videoId,
    image,
    textPlan,
    textReview,
    slider,
    btnText } = TrainingPlanSectionData;

  const textUpper = textPlan.map((snippet,index)=>
    <p key={index}>{snippet}</p>
  )

  const textLower = textReview.map((snippet,index)=>
    <p key={index}>{snippet}</p>
  )

  const trainingImage = image.map((pic, index)=>
    <img key ={index} src={pic.imgPath} alt={pic.description} />
    )

  return (
    <div>
      <section className='training-plan'>
        <YouTube video={videoId} className='video' />
        <div>{trainingImage}</div>
        <div>{textUpper}</div>
        <Slider data={slider} />
        <div>{textLower}</div>
      </section>
      <section className='motivation'>
        <button className='service-button'>{btnText}</button>
      </section>
    </div>
  )
}

export default TrainingPlanSection
