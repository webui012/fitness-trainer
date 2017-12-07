import React, {Component} from 'react'
import Service from '../Service/Service'

import khudaev from '../../images/khudaev.png'
import khudaev1 from '../../images/training-plan.jpg'
import khudaev2 from '../../images/khudaev2.png'
import nutrition from '../../images/nutrition-plan.jpg'
import './ServiceSection.scss'

const ServiceSection = props =>
  <section className='service-section'>
    <Service path='online-training' serviceName='Онлайн тренировка 1 на 1' imgSrc='../../../images/khudaev.png' />
    <Service path='training-plan' serviceName='Индивидуальная программа' imgSrc='../../../images/training-plan.jpg' />
    <Service path='nutrition-plan' serviceName='Правильное питание' imgSrc='../../../images/nutrition-plan.jpg' />
    <Service path='' serviceName='Другие услуги' imgSrc='../../../images/khudaev2.png' />
  </section>

export default ServiceSection
