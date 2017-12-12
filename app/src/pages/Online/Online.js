import React, {Component} from 'react';
/*import PersonalTraining from '../../PersonalTraining/PersonalTraining'
import ReviewSection from '../../ReviewSection/ReviewSection'
import MotivationSection from '../../MotivationSection/MotiovationSection'*/
import {
  PersonalTraining,
  ReviewSection,
  MotivationSection
} from 'Components';
import './Online.scss'

const Online = props =>
  <div className='online'>
    <PersonalTraining />
    <ReviewSection />
    <MotivationSection />
  </div>

export default Online
