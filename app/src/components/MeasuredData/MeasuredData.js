import React, { Component } from 'react';
import './MeasuredData.scss';
import { data } from '../../containers/AboutUs/data';
import { MeasuredDataForm } from './MeasuredDataForm';

const MeasuredData = () =>
  <form name="form" action="#" method="POST">
    <fieldset>
      <legend>Form NAme</legend>
      {data.fieldsMeasuredDataForm.map((items, i) =>
        <MeasuredDataForm
            key={i}
            nameField={items.nameField}
            placeholder={items.placeholder}
        />
      )}
    </fieldset>
  </form>


export default MeasuredData;