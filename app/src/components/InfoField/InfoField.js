import React from 'react';
import { Divider } from 'semantic-ui-react'
import './InfoField.scss';

const InfoField = props => (
  <p className='info-field'>
    <span className='info-title'>{props.type}: </span>
    {props.value}
  </p>
)


export default InfoField;
