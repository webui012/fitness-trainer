import React, {Component} from 'react';
import {Field} from 'redux-form';
import {renderField, renderSelectField} from '../../pages/ServiceOrder/renderField';
import {
  ageValidation,
  weightValidation,
  heightValidation,
  bodyParams,
  checkAimSelected,
} from '../../utils/orderFormValidation';
import './AdditionalInfoFields.scss'

const AdditionalInfoFields = ({prevStep, step, invalid}) => {
    return (
      <div className='additional-info'>
        <h2>Персональные данные</h2>

        <Field name='trainingPurpose' component={renderSelectField} validate={checkAimSelected}>
          <option value='default'>Выберите цель...</option>
          <option value='musclepower'>Наростить мышечную массу</option>
          <option value='loseweight'>Похудеть</option>
          <option value='beautybody'>Создать рельеф тела</option>
        </Field>

        <div>
          <Field name='age' component={renderField} validate={ageValidation} type='number' label='Возраст' />
          <Field name='height' component={renderField} validate={heightValidation} type='number' label='Рост в см' />
        </div>

        <div>
          <Field name='weight' component={renderField} validate={weightValidation} type='number' label='Вес в кг' />
          <Field name='waist' component={renderField} validate={bodyParams} type='number' label='Талия в см' />
        </div>

        <div>
          <Field name='brest' component={renderField} validate={bodyParams} type='number' label='Грудь в см' />
          <Field name='hip' component={renderField} validate={bodyParams} type='number' label='Бедро в см' />
        </div>

        <div>
          <Field name='biceps' component={renderField} validate={bodyParams} type='number' label='Бицепс в см' />
          <Field name='neck' component={renderField} validate={bodyParams} type='number' label='Шея в см' />
        </div>

        <Field name='contraindication' component='textarea' placeholder='Противопоказания' />

        <div>
          <button className='service-order-button' type='button' onClick={() => prevStep(step)}>
            Назад
          </button>
          <button className='service-order-button' type='submit' disabled={invalid}>
            Отправить
          </button>
        </div>

      </div>
    )
}

export default AdditionalInfoFields