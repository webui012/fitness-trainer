import React, {Component} from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {user: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(){
    //this.props.newUser(this.state.user)
    ::this.props.setRole(this.state.user)
}

  handleChange(event){
    this.setState(
      { user: event.target.value}
    )
  }

  render(){
    return (
      <section className='login-page'>

        <form onSubmit={this.onSubmit}>
          <fieldset className='login-form'>
            <legend className='login-form-caption'> Войти </legend>

            <label className='input-area'>
              <input className='form' type='text'
                  placeholder='Введите имя или адрес эл. почты'
                  onChange={this.handleChange} />
            </label>

            <label className='input-area'>
              <input className='form' type='password'
                  placeholder='Введите пароль'
                  //onChange={this.handleChange('password')}
                  />
            </label>

            <button className='btn-login' type='submit'>
              <Link to='/cabinet' className='btn'>Войти</Link>
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
    )
  }
}

export default LoginForm
