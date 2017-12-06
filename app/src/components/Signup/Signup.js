import React, {Component} from 'react'
import styles from './Signup.scss'
import { Link } from 'react-router-dom';



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

          <fieldset className='form-input'>
            <input className='form' type='text'
                placeholder='Введите ваше имя'
                onChange={this.handleChange('username')} />
          </fieldset>

          <fieldset className='form-input'>
            <input className='form' type='text'
                placeholder='Введите адрес электронной почты'
                onChange={this.handleChange('email')} />
          </fieldset>

          <fieldset className='form-input'>
            <input className='form' type='password'
                placeholder='Введите пароль'
                onChange={this.handleChange('password')} />
          </fieldset>

          <fieldset className='form-input'>
            <input className='form' type='password'
                placeholder='Повторите пароль'
                onChange={this.handleChange('password')} />
          </fieldset>

          <button className='btn-signup' type='submit'>
            <p className='btn'>Зарегистрироваться</p>
          </button>

          <p className='do-you-have-account'>
            <Link to='/login' className='linkto'>Уже есть аккаунт?</Link>
          </p>

        </form>
      </div>
    )
  }
}

export default Signup
