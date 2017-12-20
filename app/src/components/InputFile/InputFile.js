import React from 'react';
import './InputFile.scss';

const InputFile = props =>
  <div className='InputFile'>
      <button type='button'>Выбрать</button>
      <div>Файл не выбран</div>
      <input type='file' />
   </div>

export default InputFile;
