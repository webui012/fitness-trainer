import React from 'react';
import PropTypes from 'prop-types';

import { Slider, MotivationSection } from 'Components';
import YouTube from '@u-wave/react-youtube';
import TrainingPlanSectionData from './TrainingPlanSectionData';

import './TrainingPlanSection.scss';

const TrainingPlanSection = () => {

  const {
    videoId,
    image,
    textPlan,
    textReview,
    slider,
    motivations } = TrainingPlanSectionData;

  const textUpper = textPlan.map((snippet,index) =>
    <p key={index}>{snippet}</p>
  )

  const textLower = textReview.map((snippet,index) =>
    <p key={index}>{snippet}</p>
  )

  const trainingImage = image.map((pic, index) =>
    <img key={index} src={pic.imgPath} alt={pic.description} />
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
      <MotivationSection data={motivations} />
    </div>
  )
}

TrainingPlanSection.propTypes = {
  videoId: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.object),
  textPlan: PropTypes.arrayOf(PropTypes.string),
  textReview: PropTypes.arrayOf(PropTypes.string),
  slider: PropTypes.object,
  motivations: PropTypes.objectOf(PropTypes.string)
};

export default TrainingPlanSection
