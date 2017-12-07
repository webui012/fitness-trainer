import React, {Component} from 'react'
import './LoginForm.scss'
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props){
    super(props)

    this.state = {user: {}}
  }

  onSubmit(){
    this.props.newUser(this.state.user)
}

  handleChange(){
  }

  render(){
    return (
      <div className='login-page'>

        <form onSubmit={this.onSubmit}>
          <fieldset className='login-form'>
            <legend className='login-form-caption'> Войти </legend>

            <label classname='input-area'>
              <input className='form' type='text'
                  placeholder='Введите имя или адрес эл. почты'
                  onChange={this.handleChange('username')} />
            </label>

            <label className='input-area'>
              <input className='form' type='password'
                  placeholder='Введите пароль'
                  onChange={this.handleChange('password')} />
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
      </div>
    )
  }
}

export default LoginForm
