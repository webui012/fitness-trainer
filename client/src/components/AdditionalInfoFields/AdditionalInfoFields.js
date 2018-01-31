import React, { Component } from 'react';
import { Field } from 'redux-form';
import { renderField, renderSelectField } from '../../pages/ServiceOrder/renderField';
import { checkAimSelected, required } from '../../utils/orderFormValidation';
import './AdditionalInfoFields.scss';

const AdditionalInfoFields = ({ prevStep, step, invalid, data }) => {
  const { options } = data;

  return (
    <div className='additional-info'>
      <h2>Персональные данные</h2>

      <Field
          name='trainingPurpose'
          component={renderSelectField}
          validate={[ checkAimSelected, required ]}
      >
        {
          options.map(option => <option
              key={option.value}
              value={option.value}>
            {option.text}
          </option>)
        }
      </Field>

      <div className='service-order-additional-fields'>
        <button className='service-order-button' type='button' onClick={() => prevStep(step)}>
          Назад
        </button>
        <button className='service-order-button' type='submit' disabled={invalid}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfoFields;
