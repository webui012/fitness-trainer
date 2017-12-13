import React, {Component} from 'react';
import {
  PersonalTraining,
  ReviewSection,
  MotivationSection
} from 'Components';
import './Online.scss'
import OnlineData from './OnlineData'
/*import ServicesData from './../Services/ServicesData';*/

const Online = props =>
  <div className='online'>
    <PersonalTraining />
    <ReviewSection />
    <MotivationSection data={OnlineData.motivations[0]} />
  </div>

export default Online
