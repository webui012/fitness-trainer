import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Aims.scss';

const Aims = props => {
    const { nameField, options } = props.aimsFormData
    return (
      <div className='aims-wrap'>
        <label>{nameField}</label>
        <div>
          <select>
            <option>Выберите цель ваших тренировок...</option>
            {options.map((items, i) =>
              <option
                  key={i}
                  value={items.optionValue}
              >{items.optionValue}</option>
            )}
          </select>
        </div>
        <input type='submit' value='Сохранить данные' className='submit-full-name' />
      </div>
    )
}

Aims.propTypes = {
    nameField: PropTypes.string,
    selectName: PropTypes.string,
    optionValue: PropTypes.string,
    options: PropTypes.array
}

export default Aims
