import React from 'react';

export const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div className='input-wrapper'>
    <input {...input}
        placeholder={label}
        type={type}
        className={className}
    />
    {touched &&
        ((error && <span className='error-message'>{error}</span>))}
  </div>
)
