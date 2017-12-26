import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import './Signup.scss';
import { Field, reduxForm } from 'redux-form'


const validate = values => {
  let errors ={};
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password1) {
    errors.password1 = 'Required'
  } else if (values.password1.length < 5) {
    errors.password1 = 'Must be no less then 5 characters'
  } else if (!/[a-zA-Z]\d+/i.test(values.password1)) {
    errors.password1 = 'Must contain digits end characters'
  }
   if (!values.password2) {
    errors.password2 = 'Required'
  } else if (values.password2 !== values.password1) {
    errors.password2 = "Passwords doesn't match"
    }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error }
}) => (
  <div>
    <input {...input}
        placeholder={label}
        type={type}
        className={className}
    />
    {touched &&
        ((error && <span className='error-message'>{error}</span>))}
  </div>
)

let Signup = props => {
  const { handleSubmit, routStatus} = props

  let routToLogin;

  if (routStatus){
    routToLogin = <Redirect to='/login' />;
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
    {routToLogin}
  </div>
}

Signup = reduxForm(
  {
  form: 'registration',
  validate,
  }
)(Signup)


export default Signup
