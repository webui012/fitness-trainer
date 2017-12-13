import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Marker = props => {
    return (
      <div className={props.textClass}>
        <span>{props.text}</span>
      </div>
    )
}

Marker.propTypes = {
    textClass: PropTypes.string,
    text: PropTypes.string
};

export default Marker;