import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Header, Checkbox, Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import InlineError from '../Messages/InlineError';
import _ from 'lodash';

class SignupForm extends Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
    },
    pw_confirmed: false,
    isChecked: false,
    // loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onToggle = () =>
    this.setState({
      ...this.state, isChecked: !this.state.isChecked
    })


  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (_.isEmpty(errors)) {
      this.props.submit(this.state.data)

    }
  };

  onPasswordConfirm = (e) => {
    const { password } = this.state.data;

    if (e.target.value === password) {
      this.setState({
        ...this.state, pw_confirmed: true
      })
    } else { this.setState({
        ...this.state, pw_confirmed: false
      })
    }
  }

  validate = data => {
    const errors = {};
    const { pw_confirmed } = this.state

    if (!isEmail(data.email)) errors.email = 'Некорректный email!';
    if (!data.password) errors.password = 'Это поле не может быть пустым!';
    if (!data.username) errors.username = 'Это поле не может быть пустым!';
    if (!pw_confirmed) errors.pw_confirm = 'Пароли не совпадают';

    return errors;
  };

  render() {
    const { data, errors, isChecked, pw_confirmed } = this.state;

    return (
      <Form className='form' onSubmit={this.onSubmit}>
        <legend className='signup-form-caption page-title'>Создать аккаунт</legend>
        {this.props.isLoading && <Dimmer active inverted><Loader/></Dimmer>}
        <Form.Field error={!!errors.username}>
          <label htmlFor='username'> Имя пользователя</label>
          <input
            type='text'
            id='username'
            name='username'
            value={data.username}
            onChange={this.onChange}
          />
          {errors.username && <InlineError text={errors.username} />}
        </Form.Field>

        <Form.Field error={!!errors.email}>
          <label htmlFor='email'> Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='example@email.com'
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor='password'> Пароль</label>
          <input
            type='password'
            id='password'
            name='password'
            value={data.password}
            onChange={this.onChange}
            placeholder='Password'
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Form.Field error={!!errors.pw_confirm}>
          <input
            type='password'
            onChange={this.onPasswordConfirm}
            placeholder='Confirm password'
          />
          {!pw_confirmed &&  <InlineError text={errors.pw_confirm} />}
        </Form.Field>

        <Form.Field>
          <Checkbox
            checked={isChecked}
            onChange={this.onToggle}
            label='Я согласен с условиями использования'
          />
        </Form.Field>

        <Button disabled={!isChecked} primary>Регистрация</Button>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
