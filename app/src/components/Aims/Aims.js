import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Aims = props => {
    const { nameField, selectName, options } = props.aimsFormData
    return (
      <div>
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
    nameField: propTypes.string,
    selectName: propTypes.string,
    optionValue: propTypes.string,
    options: propTypes.array
}

export default Aims