import React from 'react';

export const renderField = ({ input, label, type, placeholder, meta: { invalid, touched, error } }) => (
  <div className='service-order-renderfield'>
    <label>{label}</label>
    <input {...input} type={type} placeholder={placeholder} />
    {invalid && error ?
      <span className='service-order-error'>{error}</span>
      : <span className='service-order-error'></span>
    }
  </div>
);

export const renderSelectField = ({ input, meta: { invalid, touched, error }, children }) => (
  <div className='service-order-renderselect'>
    <select {...input}>
      {children}
    </select>
    {invalid && error ?
      <span className='service-order-error'>{error}</span>
      : <span className='service-order-error'></span>
    }
  </div>
);
