import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MeasuredDataForm = props => {
  const { nameField, placeholder } = props
  return (
    <label>{nameField}
      <input type='text' placeholder={`${placeholder} ${nameField}`} />
    </label>
  )
}

MeasuredDataForm.propTypes = {
    nameField: PropTypes.string,
    placeholder: PropTypes.string
}

export default MeasuredDataForm