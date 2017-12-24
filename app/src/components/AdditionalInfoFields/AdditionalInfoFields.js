import React, {Component} from 'react';
import {Field} from 'redux-form';
import './AdditionalInfoFields.scss';

const AdditionalInfoFields = ({prevStep, step}) => {
    return (
      <div className='additional-info'>
        <h2>Персональные данные</h2>

        <Field name='training-purpose' component='select'>
          <option value='musclepower'>Наростить мышечную массу</option>
          <option value='loseweight'>Похудеть</option>
          <option value='beautybody'>Создание рельефа тела</option>
        </Field>

        <div>
          <Field name='age' component='input' type='number' placeholder='Возраст' />
          <Field name='height' component='input' type='number' placeholder='Рост в см' />
        </div>
        <div>
          <Field name='weight' component='input' type='number' placeholder='Вес в кг' />
          <Field name='waist' component='input' type='number' placeholder='Талия в см' />
        </div>
        <div>
          <Field name='brest' component='input' type='number' placeholder='Грудь в см' />
          <Field name='hip' component='input' type='number' placeholder='Бедро в см' />
        </div>

        <div>
          <Field name='biceps' component='input' type='number' placeholder='Бицепс в см' />
          <Field name='neck' component='input' type='number' placeholder='Шея в см' />
        </div>

        <Field name='contradiction' component='textarea' placeholder='Противопоказания' />

        <button onClick={() => prevStep(step)}>Назад</button>
        <button type='submit'>Завершить</button>
      </div>
    )
}

export default AdditionalInfoFields