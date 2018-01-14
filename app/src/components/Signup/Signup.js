import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import './Signup.scss';
import { Field, reduxForm } from 'redux-form'
import {validate} from './validate';
import {renderField} from './renderField';




let Signup = props => {
  const { handleSubmit, routStatus} = props;

  //let routToLogin;

  if (routStatus){
    return <Redirect to='/cabinet/user' />;
  }

  return <div className='signup-page'>
    <form onSubmit={handleSubmit}>
      <fieldset className='signup-form'>
        <legend className='signup-form-caption'>Создать аккаунт</legend>
        <label className='form-input'>
          <Field
              className='form'
              name='username'
              type='text'
              component={renderField}
              label='Введите ваше имя'
          />
        </label>

        <label className='form-input'>
          <Field
              className='form'
              name='email'
              type='email'
              component={renderField}
              label='Введите адрес электронной почты'
          />
        </label>

        <label className='form-input'>
          <Field
              className='form'
              name='password1'
              type='password'
              component={renderField}
              label='Введите пароль'
          />
        </label>

        <label className='form-input'>
          <Field
              className='form'
              name='password2'
              type='password'
              component={renderField}
              label='Повторите пароль'
          />
        </label>

        <button
            className='btn-signup'
            type='submit'
        >
          <p className='btn'>Зарегистрироваться</p>
        </button>


        <label className='link-to'>
          <Link to='/login' className='linkto'>Уже есть аккаунт?</Link>
        </label>
      </fieldset>
    </form>

  </div>
}

Signup = reduxForm(
  {
    form: 'SignUpForm',
    validate,
  }
)(Signup)


export default Signup
