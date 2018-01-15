import React from 'react';
import './LoginForm.scss';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {validate} from './validate';
import {renderField} from './renderField';
import { ALL } from '../../redux/constants';


let LoginForm = props => {

   const { role, from, handleSubmit } = props;

   if (role !== ALL) {
      return (
        <Redirect to={from} />
      )
    }

    return <section className='login-page'>
      <form onSubmit={handleSubmit}>
        <fieldset className='login-form'>
          <legend className='login-form-caption'> Войти </legend>

          <label className='input-area'>
            <Field
                className='form'
                name='login'
                type='text'
                component={renderField}
                label='Введите имя или адрес эл. почты'
            />
          </label>

          <label className='input-area'>
            <Field
                className='form'
                name='password'
                type='password'
                component={renderField}
                label='Введите пароль'
            />
          </label>

          <button
              className='btn-login'
              type='submit'
          >
            <p className='btn'> Войти </p>
          </button>

          <label className='link-to'>
            <Link to='/signup' className='linkto'>Создать аккаунт</Link>
          </label>

        </fieldset>
      </form>
    </section>
}

LoginForm = reduxForm(
  {
    form: 'loginForm',
    validate
  }
)(LoginForm)

export default LoginForm
