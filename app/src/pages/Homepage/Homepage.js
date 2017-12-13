import React from 'react';
import { Slider } from 'Components';
import HomepageData from './HomepageData';

const Homepage = props => {
  const slides = HomepageData.slides,
        sliderParams = HomepageData.sliderParams
  return (
    <Slider slides={slides} params={sliderParams} />
  )
}

export default Homepage
