import React, {Component} from 'react';
import {Service} from 'Components';

import onlineTraining from '../../images/khudaev.png';
import trainingPlan from '../../images/training-plan.jpg';
import anotherServices from '../../images/khudaev2.png';
import nutritionPlan from '../../images/nutrition-plan.jpg';
import './ServiceSection.scss';

const ServiceSection = props =>
  <section className='service-section'>
    <Service path='online-training' serviceName='Онлайн тренировка 1 на 1' imgSrc={onlineTraining} />
    <Service path='training-plan' serviceName='Индивидуальная программа' imgSrc={trainingPlan} />
    <Service path='nutrition-plan' serviceName='Правильное питание' imgSrc={nutritionPlan} />
    <Service path='' serviceName='Другие услуги' imgSrc={anotherServices} />
  </section>

export default ServiceSection
