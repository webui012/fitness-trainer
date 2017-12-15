import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactsField.scss';


const ContactsField = props =>

  <div className='contacts-field-text'>
    <p><span className='contacts-field-textTitle'>{props.title}</span>
      {props.data}
    </p>
  </div>

ContactsField.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
};

export default ContactsField
