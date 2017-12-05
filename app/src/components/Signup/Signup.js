import React, {Component} from 'react'
import styles from './Signup.scss'


class Signup extends Component {
  constructor(props){
    super(props)

    this.state = {user: {}}
  }

  onSubmit(){
    this.props.addUser(this.state.user)
  }

  handleChange(){
  }

  render(){
    return (
      <div className='signup-page'>
        <h2 className='signup'>Создать аккаунт</h2>

      <form onSubmit={this.onSubmit}>

        <input className='form' type='text'
          placeholder='Введите ваше имя'
          onChange={this.handleChange('username')} /> <br/>

        <input className='form' type='text'
          placeholder='Введите адрес электронной почты'
          onChange={this.handleChange('email')} /> <br/>

        <input className='form' type='password'
            placeholder='Введите пароль'
            onChange={this.handleChange('password')} /> <br/>

        <input className='form' type='password'
            placeholder="Повторите пароль"
            onChange={this.handleChange('password')} /> <br/>

        <button className='btn-signup' type='submit'>
          <p className='btn'> Зарегистрироваться </p>
          </button>

          <p className='do-you-have-account'>
            <a className='link' href=''> Уже есть акаунт?</a>
          </p>

        </form>

   </div>
  )
 }
}


import default Signup
