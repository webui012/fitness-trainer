import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import './Signup.scss';
import { Field, reduxForm } from 'redux-form'
import { validate } from './validate';
import { renderField } from './renderField';

let Signup = props => {
  const { handleSubmit, routStatus} = props;

  //let routToLogin;

  if (routStatus){
    return <Redirect to='/cabinet/user' />;
  }

  return (
      <form onSubmit={handleSubmit}>
        <fieldset className='signup-form'>
          <legend className='signup-form-caption page-title'>Создать аккаунт</legend>

          <div className='input-wrapper'>
            <label htmlFor='' className='input-label'>Имя</label>
            <Field
                className='form'
                name='username'
                type='text'
                component={renderField}
                label='Введите ваше имя'/>
          </div>

          <div className='input-wrappers'>
            <label htmlFor='' className='input-label'>Эл.почта</label>
            <Field
                className='form'
                name='email'
                type='email'
                component={renderField}
                label='Введите адрес электронной почты'/>
          </div>

          <div className='input-wrapper'>
            <label htmlFor='' className='input-label'>Пароль</label>
            <Field
                className='form'
                name='password1'
                type='password'
                component={renderField}
                label='Введите пароль'/>
          </div>

          <div className='input-wrapper'>
            <Field
                className='form'
                name='password2'
                type='password'
                component={renderField}
                label='Повторите пароль'/>
          </div>

          <button
            className='btn-signup'
            type='submit'>Зарегистрироваться</button>

          <Link to='/login' className='linkto'>Уже есть аккаунт?</Link>
        </fieldset>
      </form>
  )
}

Signup = reduxForm(
  {
    form: 'SignUpForm',
    validate,
  }
)(Signup)


export default Signup
