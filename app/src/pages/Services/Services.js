import React, {Component} from 'react';
import {
  ServiceSection,
  MotivationSection,
} from 'Components';
import ServicesData from './ServicesData';
import './Services.scss';


const Services = props =>
  <div className='services'>
    <ServiceSection data={ServicesData.services} />
    <MotivationSection data={ServicesData.motivations[0]} />
  </div>;

export default Services
