import React from 'react';
import './Spinner.scss';

const Spinner =props =>
  <div className='page-wrap'>
  <p>Идет загрузка</p>
    <div className='spinner-wrap'>
      <div className='wrap'>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <div className='bar4'></div>
        <div className='bar5'></div>
        <div className='bar6'></div>
        <div className='bar7'></div>
        <div className='bar8'></div>
        <div className='bar7'></div>
        <div className='bar8'></div>
        <div className='bar9'></div>
        <div className='bar10'></div>
      </div>
    </div>
  </div>

export default Spinner;
