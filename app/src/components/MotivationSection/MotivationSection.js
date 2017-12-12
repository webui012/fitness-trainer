import React, {Component} from 'react';
import {Button} from 'Components';
import './MotivationSection.scss';

const MotivationSection = props =>
  <section className='motivation-section'>
    <h3>Стань лучше прямо сейчас!</h3>
    <Button text='Начать тренироваться' classStyle='service-button' />
  </section>

export default MotivationSection
