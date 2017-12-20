import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MeasuredDataForm = props => {
  const { nameField, placeholder } = props
  return (
    <div>
      <label>{nameLabel.toUpperCase()}</label>
      <input type='text' placeholder={`${placeholder} ${nameLabel}`} />
    </div>
  )
}

MeasuredDataForm.propTypes = {
  nameLabel: PropTypes.string,
  placeholder: PropTypes.string
}

export default MeasuredDataForm