import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Marker = props => {
    const { textClass, text} = props
    return (
      <div className={textClass}>
        <span>{text}</span>
      </div>
    )
}

Marker.propTypes = {
    textClass: PropTypes.string,
    text: PropTypes.string
};

export default Marker;