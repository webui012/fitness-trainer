import React, { Component } from 'react';
import './ContactsField.scss';


const ContactsField = props =>

  <div className='ContactsFieldText'>
    <p><span className='ContactsFieldTextTitle'>{props.title}</span>
      {props.data}
    </p>
  </div>


export default ContactsField
