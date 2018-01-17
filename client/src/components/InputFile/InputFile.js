import React from 'react';
import PropTypes from 'prop-types';
import './InputFile.scss';

const InputFile = props => {
  const loadHandler = event => {
    props.location(event.target.value);
  };

  return (
    <div className='InputFile'>
      <div className='file-address'>{props.inputValue}</div>
      {props.name !== null ?
        <span className='active-warning'>{props.name}</span> :
        <span className='not-active-warning'>{props.name}</span>}
      <input type='file' className='load-avatar' onChange={loadHandler}/>
    </div>
  );
};

InputFile.propTypes = {
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string,
  location: PropTypes.func.isRequired,
};

export default InputFile;
