import React, {Component} from 'react'
import ServiceSection from '../../ServiceSection/ServiceSection'
import MotiovationSection from '../../MotivationSection/MotiovationSection'
import './Services.scss'

const Services = props =>
  <div className='services'>
    <ServiceSection />
    <MotiovationSection />
  </div>

export default Services
