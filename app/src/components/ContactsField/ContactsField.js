import React, { Component } from 'react';
import './ContactsField.scss';

const ContactsField = props =>
  <div className='texts'>
    <p><span className='textTitle'>{props.title}</span>
      {props.data}
    </p>
  </div>


export default ContactsField
