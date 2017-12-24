import React, {Component} from 'react';
import {Field} from 'redux-form';
import './ServiceToogleFields.scss';

const ServiceToogleFields = ({nextStep, step}) => {
    return (
      <div className='service-toogle'>
        <h2>Выбор услуги </h2>

        <Field name='service-type' component='select'>
          <option value='trainonline'>Онлайн тренировка 1 на 1</option>
          <option value='trainprogram'>Програма тренировок</option>
          <option value='nutritionplan'>План питания</option>
        </Field>

        <button onClick={() => nextStep(step)}>Далее</button>
      </div>
    )
}

export default ServiceToogleFields