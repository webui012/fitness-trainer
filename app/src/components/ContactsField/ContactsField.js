import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactsField.scss';


const ContactsField = props =>

  <div className='ContactsFieldText'>
    <p><span className='ContactsFieldTextTitle'>{props.title}</span>
      {props.data}
    </p>
  </div>

ContactsField.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string
};

export default ContactsField
