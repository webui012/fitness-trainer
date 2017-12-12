import React, {Component} from 'react';
import {
  PersonalTraining,
  ReviewSection,
  MotivationSection
} from 'Components';
import './Online.scss'
import ServicesData from './../Services/ServicesData';

const Online = props =>
  <div className='online'>
    <PersonalTraining />
    <ReviewSection />
    <MotivationSection />
  </div>

export default Online
