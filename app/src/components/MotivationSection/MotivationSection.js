import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './MotivationSection.scss';

const MotivationSection = props => {
    const {text, heading, sectionStyle, buttonStyle} = props.data;

    return (
      <section className={sectionStyle}>
        <h3>{heading}</h3>
        <Link to='/signup'>
          <button className={buttonStyle}>{text}</button>
        </Link>
      </section>
    )
}

MotivationSection.propTypes = {
    data: PropTypes.object
}
export default MotivationSection
