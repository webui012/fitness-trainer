import React, {Component} from 'react';
import {
  PersonalTraining,
  ReviewSection,
  MotivationSection
} from 'Components';
import './Online.scss';
import OnlineData from './OnlineData';
import ServicesData from './../Services/ServicesData';


const Online = props =>
  <div className='online'>
    <PersonalTraining data={OnlineData}/>
    <ReviewSection data={OnlineData}/>
   <MotivationSection data={ServicesData.motivations[1]} />
  </div>

export default Online
