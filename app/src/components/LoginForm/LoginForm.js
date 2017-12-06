import React, {Component} from 'react'
import styles from './LoginForm.scss'
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
        <h2 className='login'> Войти </h2>

        <form onSubmit={this.onSubmit}>

          <fieldset className='input-area'>
            <input className='form' type='text'
                placeholder='Введите имя или адрес эл. почты'
                onChange={this.handleChange('username')} />
          </fieldset>

          <fieldset className='input-area'>
            <input className='form' type='password'
                placeholder='Введите пароль'
                onChange={this.handleChange('password')} />
          </fieldset>

          <button className='btn-login' type='submit'>
            <p className='btn'> Войти </p>
          </button>

          <label className='link-to'>
            <Link to='' className='linkto'>Забыли пароль?</Link>
          </label>

          <label className='link-to'>
            <Link to='/signup' className='linkto'>Создать аккаунт</Link>
          </label>
        </form>
      </div>
    )
  }
}

export default LoginForm
