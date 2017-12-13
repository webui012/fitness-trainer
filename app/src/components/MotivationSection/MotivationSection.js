import React, {Component} from 'react';
import {Button} from 'Components';
import PropTypes from 'prop-types';
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

MotivationSection.propTypes = {
    data: PropTypes.object
}
export default MotivationSection
