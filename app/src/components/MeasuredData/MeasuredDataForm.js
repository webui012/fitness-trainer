import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MeasuredDataForm = props => {
  const { type, nameField, placeholder } = props
  return (
    <div>
      <label>{nameField.toUpperCase()}</label>
      <input type={type} placeholder={`${placeholder} ${nameField}`} />
    </div>
  )
}

MeasuredDataForm.propTypes = {
  type: PropTypes.string,
  nameLabel: PropTypes.string,
  placeholder: PropTypes.string
}

export default MeasuredDataForm