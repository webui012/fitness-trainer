import React, { Component } from 'react';
import { Field } from 'redux-form';
import { renderSelectField } from '../../pages/ServiceOrder/renderField';
import {
  checkOptionSelected,
  required
} from '../../utils/orderFormValidation';
import './ServiceToogleFields.scss';

const ServiceToogleFields = ({ nextStep, step, invalid, data }) =>
  <div className='service-toogle'>
    <h2>Выбор услуги </h2>

    <Field name='serviceType' component={renderSelectField} validate={[ checkOptionSelected, required ]}>
      {
        data.map(option =>
          <option key={option.value} value={option.value}>{option.text}</option>
        )
      }
    </Field>

    <button className='service-order-button' disabled={invalid} onClick={() => nextStep(step)}>
      Далее
    </button>
  </div>;

export default ServiceToogleFields;
