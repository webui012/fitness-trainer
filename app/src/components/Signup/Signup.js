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
        <form onSubmit={this.onSubmit}>
          <fieldset className='signup-form'>
            <legend className='signup-form-caption'>Создать аккаунт</legend>

            <label className='form-input'>
              <input className='form' type='text'
                  placeholder='Введите ваше имя'
                  onChange={this.handleChange('username')} />
            </label>

            <label className='form-input'>
              <input className='form' type='text'
                  placeholder='Введите адрес электронной почты'
                  onChange={this.handleChange('email')} />
            </label>

            <label className='form-input'>
              <input className='form' type='password'
                  placeholder='Введите пароль'
                  onChange={this.handleChange('password')} />
            </label>

            <label className='form-input'>
              <input className='form' type='password'
                  placeholder='Повторите пароль'
                  onChange={this.handleChange('password')} />
            </label>

            <button className='btn-signup' type='submit'>
              <p className='btn'>Зарегистрироваться</p>
            </button>

            <label className='link-to'>
              <Link to='/login' className='linkto'>Уже есть аккаунт?</Link>
            </label>

          </fieldset>
        </form>
      </div>
    )
  }
}

export default Signup
