import React, {Component} from 'react';
import {
  PersonalTraining,
  ReviewSection,
  MotivationSection
} from 'Components';
import './Online.scss';
import OnlineData from './OnlineData';


const Online = props =>
  <div className='online'>
    <PersonalTraining data={OnlineData}/>
    <ReviewSection data={OnlineData}/>
   <MotivationSection data={OnlineData.motivations[0]} />
  </div>

export default Online
