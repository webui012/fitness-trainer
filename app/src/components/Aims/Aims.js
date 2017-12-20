import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Aims = props => {
    const { nameField, selectName, options } = props.aimsFormData
    return (
      <div className='aims-wrap'>
        <label>{nameField}</label>
        <div>
          <select name={selectName} >
            <option selected />
            {options.map((items, i) =>
              <option
                  key={i}
                  value={items.optionValue}
              >{items.optionValue}</option>
            )}
          </select>
        </div>
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
