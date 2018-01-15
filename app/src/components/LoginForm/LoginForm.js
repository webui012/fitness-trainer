import React from 'react';
import './LoginForm.scss';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate';
import { renderField } from './renderField';
import { ALL } from '../../redux/constants';
import { Button, Checkbox, Form } from 'semantic-ui-react'

let LoginForm = props => {

   const { role, from, handleSubmit } = props;

   if (role !== ALL) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <form className='login-from' onSubmit={handleSubmit}>
        <fieldset className='login-form'>
          <legend className='login-form-caption'>Войти</legend>

          <div className='input-area'>
            <label htmlFor='' className='input-label'></label>
            <Field
                className='form'
                name='login'
                type='text'
                component={renderField}
                label='Введите имя или адрес эл. почты'/>
          </div>

          <div className='input-area'>
            <label htmlFor='' className='input-label'></label>
            <Field
                className='form'
                name='password'
                type='password'
                component={renderField}
                label='Введите пароль'/>
          </div>

          <button className='btn-login' type='submit'>Войти</button>
          <Link to='/passwordreset' className='linkto'>Забыли пароль?</Link>
          <Link to='/signup' className='linkto'>Создать аккаунт</Link>

        </fieldset>
      </form>
    )
}

LoginForm = reduxForm(
  {
    form: 'loginForm',
    validate
  }
)(LoginForm)

export default LoginForm
