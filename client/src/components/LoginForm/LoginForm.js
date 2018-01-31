import React from 'react';
import './LoginForm.scss';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validate } from './validate';
import { renderField } from './renderField';
import { ALL } from '../../redux/constants';
import { Checkbox } from 'semantic-ui-react'

let LoginForm = props => {
   const { role, from, handleSubmit } = props;

  if (role !== ALL) {
    return (
      <Redirect to={from} />
    );
  }

    return (
      <form onSubmit={handleSubmit}>
        <fieldset className='login-form'>
          <legend className='login-form-caption page-title'>Вход</legend>

          <div className='input-wrapper'>
            <label htmlFor='' className='input-label'>Логин</label>
            <Field
                className='form'
                name='username'
                type='text'
                component={renderField}
                label='Введите имя или адрес эл. почты' />
          </div>

          <div className='input-wrapper'>
            <label htmlFor='' className='input-label'>Пароль</label>
            <Field
                className='form'
                name='password'
                type='password'
                component={renderField}
                label='Введите пароль' />
          </div>
          <Checkbox label={<label>Запомнить меня</label>} />
          <button className='btn-login' type='submit'>Войти</button>

          <label className='link-to'>
            <Link to='/signup' className='linkto'>Создать аккаунт</Link>
          </label>

        </fieldset>
      </form>
    );
}

LoginForm = reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);

export default LoginForm;
