import React, {Component} from 'react';
import {Button} from 'Components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './MotivationSection.scss';

const MotivationSection = props => {
    const data = props.data;

    return (
      <section className='motivation-section'>
        <h3>{data.heading}</h3>
        <Link to='/signup'>
          <button className='service-button'>{data.text}</button>
        </Link>
      </section>
    )
}

MotivationSection.propTypes = {
    data: PropTypes.object
}
export default MotivationSection
