import React, { Component } from 'react';
import './MeasuredData.scss';
import MeasuredDataForm from './MeasuredDataForm';

const MeasuredData = props => {

    const { name, action, method, fieldsMeasuredDataForm } = props.data;
    const { legendName } = props.data.MeasuredData

    return (
      <div className='form-wrap'>
        <form name={name} action={action} method={method}>
          <fieldset>
            <legend>{legendName}</legend>

            {fieldsMeasuredDataForm.map((items, i) =>
              <MeasuredDataForm
                  key={i}
                  type={items.type}
                  nameField={items.nameField}
                  placeholder={items.placeholder}
              />
            )}
            <input type='submit' value='Сохранить данные' className='submit-full-name' />
          </fieldset>
        </form>
      </div>
    )
}

export default MeasuredData;
