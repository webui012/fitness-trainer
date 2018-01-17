import React, { Component } from 'react';
import { Field } from 'redux-form';
import { renderField, renderSelectField } from '../../pages/ServiceOrder/renderField';
import { checkAimSelected } from '../../utils/orderFormValidation';
import './AdditionalInfoFields.scss';

const AdditionalInfoFields = ({ prevStep, step, invalid, data }) => {
  const { options, fields } = data;

  return (
    <div className='additional-info'>
      <h2>Персональные данные</h2>

      <Field
          name='trainingPurpose'
          component={renderSelectField}
          validate={checkAimSelected}
      >
        {
          options.map(option => <option
              key={option.value}
              value={option.value}>
            {option.text}
          </option>)
        }
      </Field>

      <div className='service-order-inputs'>
        {
          fields.map(field =>
            <Field key={field.id}
                name={field.name}
                component={field.component}
                validate={field.validate}
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
            />)
        }
      </div>

      <div>
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
