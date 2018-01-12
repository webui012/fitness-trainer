import React from 'react';
import './LoginForm.scss';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {validate} from './validate';
import {renderField} from './renderField';


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

          <button
              className='btn-login'
              type='submit'
          >
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

LoginForm = reduxForm(
  {
    form: 'loginForm',
    validate
  }
)(LoginForm)

export default LoginForm







=======
import { Link, Redirect } from 'react-router-dom';


class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      authorized: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
  }

  handleBlur(){
    this.props.setRole(this.state.user.toUpperCase());
  }

  handleChange(event){
    this.setState(
      { user: event.target.value }
    )
  }

 handleClick(){
   this.setState(
      { authorized: true }
    )
 }

  render(){
    if (this.state.authorized) {
      return (
        <Redirect to={this.props.from} />
      )
    }
    return (
      <section className='login-page'>

        <form onSubmit={this.onSubmit}>
          <fieldset className='login-form'>
            <legend className='login-form-caption'> Войти </legend>

            <label className='input-area'>
              <input className='form' type='text'
                  placeholder='Введите имя или адрес эл. почты'
                  onChange={this.handleChange} onBlur={this.handleBlur} />
            </label>

            <label className='input-area'>
              <input className='form' type='password'
                  placeholder='Введите пароль'
                  //onChange={this.handleChange('password')}
                  />
            </label>
            <button className='btn-login' type='submit' onClick={this.handleClick}>Войти</button>
            <label className='link-to'>
              <Link to='/passwordreset' className='linkto'>Забыли пароль?</Link>
            </label>

            <label className='link-to'>
              <Link to='/signup' className='linkto'>Создать аккаунт</Link>
            </label>

          </fieldset>
        </form>
      </section>
    )
  }
}

export default LoginForm;
>>>>>>> 35eee0e83a5dab622cf7756ab4b99d0460ff42ee
