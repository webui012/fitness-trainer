import React, {Component} from 'react';
import {
ServiceSection,
MotivationSection,
} from 'Components';
import './Services.scss';


const Services = props =>
  <div className='services'>
    <ServiceSection />
    <MotivationSection />
  </div>

export default Services
