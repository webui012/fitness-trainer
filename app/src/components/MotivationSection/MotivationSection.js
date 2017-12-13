import React, {Component} from 'react';
import {Button} from 'Components';
import './MotivationSection.scss';

const MotivationSection = props => {
    const data = props.data;

    return (
      <section className='motivation-section'>
        <h3>{data.heading}</h3>
        <Button text={data.text} classStyle='service-button' />
      </section>
    )
}

export default MotivationSection
