import React from 'react';
import PropTypes from 'prop-types';
import './ErrorLoadingData.scss';

const ErrorLoadingData = props =>
  <div className='wrap-error'>
    <div className='error-loading-data'>
      <p>Извините произошла ошибка сохранения данных, попробуйте ещё раз</p>
      <button type='button' name='agree' onClick={props.closeMessage}>Ок</button>
    </div>
  </div>;

ErrorLoadingData.propTypes = {
  closeMessage: PropTypes.func.isRequired,
};

export default ErrorLoadingData;
