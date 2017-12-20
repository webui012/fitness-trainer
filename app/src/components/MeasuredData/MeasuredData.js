import React, { Component } from 'react';
import './MeasuredData.scss';
import { data } from '../../containers/AboutUs/data';
import MeasuredDataForm from './MeasuredDataForm';

const MeasuredData = props => {

    const { name, action, method, legendName, fieldsMeasuredDataForm } = props.data

    return (
      <form name={name} action={action} method={method}>
        <fieldset>
          <legend>{legendName}</legend>

          {fieldsMeasuredDataForm.map((items, i) =>
            <MeasuredDataForm
                key={i}
                nameField={items.nameField}
                placeholder={items.placeholder}
            />
          )}

        </fieldset>
      </form>
    )
}

export default MeasuredData;
