import React from 'react';
import PropTypes from 'prop-types';
import './ErrorLoadingData.scss';

const ErrorLoadingData = props =>
  <div className='error-loading-data'>
    Извините произошла ошибка сохранения данных, попробуйте ещё раз
    <button type='button' name='agree' onClick={props.closeMessage}>Ок</button>
  </div>

ErrorLoadingData.propTypes = {
  closeMessage: PropTypes.func.isRequired
}

export default ErrorLoadingData;
