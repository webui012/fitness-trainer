import React, {Component} from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';


class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {user: ''};
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
  }

  handleFocus(){
    this.props.setRole(this.state.user);
  }

  handleChange(event){
    this.setState(
      { user: event.target.value }
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
                  placeholder='Введите пароль' onFocus={this.handleFocus}
                  //onChange={this.handleChange('password')}
                  />
            </label>
            <Link to={`/cabinet/${this.props.path}`} className='btn'>
              <button className='btn-login' type='submit'>Войти</button>
            </Link>
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
