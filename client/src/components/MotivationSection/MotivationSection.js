import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MotivationSection.scss';

const MotivationSection = props => {
  const { text, heading, sectionStyle, buttonStyle } = props.data;

  return (
    <section className={sectionStyle}>
      <h3>{heading}</h3>
      <Link to='/cabinet/user/service-order'>
        <button className={buttonStyle}>{text}</button>
      </Link>
    </section>
  );
};

MotivationSection.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    heading: PropTypes.string,
    sectionStyle: PropTypes.string,
    buttonStyle: PropTypes.string,
  }),
};

export default connect()(MotivationSection);
