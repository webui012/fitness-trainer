import React, {Component} from 'react'
import styles from './LoginForm.scss'
import { Link } from 'react-router';

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
        <h2 className='login'>Войти</h2>

        <form onSubmit={this.onSubmit}>

          <input className='form' type='text'
              placeholder='Введите имя или адрес эл. почты'
              onChange={this.handleChange('username')} /> <br />

          <input className='form' type='password'
              placeholder='Введите пароль'
              onChange={this.handleChange('password')} /> <br />

          <button className='btn-login' type='submit'>
            <p className='btn'> Войти </p>
          </button>

          <p className='forgot-password'>
            <a className='link' href=''> Забыли пароль? </a> <br />
            <a className='link' href='/signup'> Создать аккаунт </a>
          </p>

        </form>
      </div>
    )
  }
}

export default LoginForm
