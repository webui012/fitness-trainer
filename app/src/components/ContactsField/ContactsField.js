import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactsField.scss';


const ContactsField = props =>

  <div className='contacts-field-text'>
    <p>{props.data}</p>
  </div>

ContactsField.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string
};

export default ContactsField
