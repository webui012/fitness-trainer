import React, {Component} from 'react';
import {Field} from 'redux-form';
import {renderSelectField} from '../../pages/ServiceOrder/renderField';
import {
  checkOptionSelected
} from '../../utils/orderFormValidation';
import './ServiceToogleFields.scss';

const ServiceToogleFields = ({nextStep, step, invalid}) => {
    return (
      <div className='service-toogle'>
        <h2>Выбор услуги </h2>

        <Field name='serviceType' component={renderSelectField} validate={checkOptionSelected}>
          <option value='default'>Выберите услугу...</option>
          <option value='trainonline'>Онлайн тренировка 1 на 1</option>
          <option value='trainprogram' >Програма тренировок</option>
          <option value='nutritionplan'>План питания</option>
        </Field>

        <button className='service-order-button' disabled={invalid} onClick={() => nextStep(step)}>
          Далее
        </button>
      </div>
    )
}

export default ServiceToogleFields