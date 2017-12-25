import React from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

const validate = values => {
const errors = {}
  if (!values.login) {
    errors.login = 'Required'
 }
  if (!values.password) {
    errors.password = 'Required'
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
    <input {...input} placeholder={label} type={type} className={className} />
    {touched &&
        ((error && <span>{error}</span>))}
  </div>
)

let LoginForm = props => {
   const { handleSubmit } = props;
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

          <button className='btn-login' type='submit'>
            <p className='btn'> Войти </p>
          </button>

          <label className='link-to'>
            <Link to='/passwordreset' className='linkto'>Забыли пароль?</Link>
          </label>

          <label className='link-to'>
            <Link to='/signup' className='linkto'>Создать аккаунт</Link>
          </label>

        </fieldset>
      </form>
    </section>
}

LoginForm = reduxForm({
  form: 'registration',
  validate
})(LoginForm)

export default LoginForm







