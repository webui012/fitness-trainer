import React from 'react';
import './ErrorLoadingData.scss';

const ErrorLoadingData = props =>
  <div className='error-loading-data'>
    Извините произошла ошибка сохранения данных, попробуйте ещё раз
    <button type='button' name='agree' onClick={props.closeMessage}>Ок</button>
  </div>

export default ErrorLoadingData;
