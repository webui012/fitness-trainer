import React from 'react';
import {Slider} from 'Components';

const Homepage = props => {
  const slide1 = 'https://www.hdwallpapers.in/walls/pushup_workout-HD.jpg',
        slide2 = 'https://media.self.com/photos/5867a314bf5e49f716efe864/2:1/pass/workout-package_1.png',
        slide3 = 'http://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/styles/main/public/gettyimages-498315681.jpg?itok=qqWRWFw9'

  return (
    <Slider slide1={slide1} slide2={slide2} slide3={slide3} />
  )
}

export default Homepage
