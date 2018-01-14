import React from 'react';
import { Divider } from 'semantic-ui-react'
import './InfoField.scss';

const InfoField = props => (
  <div>
    <span className='info-title'>{props.type}: </span>
    <p className='info-block'>{props.value}</p>
    <Divider/>
  </div>
)


export default InfoField;
