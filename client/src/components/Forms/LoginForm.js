import React, { Component } from 'react';
import { List, Message, Button, Form } from 'semantic-ui-react'
import Validator from 'validator';
import InlineError from '../Messages/InlineError'
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }
  }

  validate = data => {
    const errors = {}
    if (!Validator.isEmail(data.email))
      errors.email = 'Invalid email!'
    if (!data.password)
      errors.password = 'Cant be blank!'
    return errors
  }

  handleChange = e => this.setState({
    data: {
      ...this.state.data,
      [e.target.name]: e.target.value
    }
  })

  handleSubmit = () => {
    const errors = this.validate(this.state.data)

    this.setState({errors})

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
    }
  }

  render() {
    const { data, errors } = this.state;

    return (
      <Form className='form login-form' onSubmit={this.handleSubmit}>
        <legend className='login-form-caption page-title'>Вход</legend>
        {errors.global && <Message negative header={errors.global} />}

        <Form.Field error={!!errors.email}>
          <label htmlFor='email'>Email</label>
          <input
            onChange={this.handleChange}
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            value={data.email}
          />
          {errors.email && <InlineError text={errors.email}/>}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor='password'> Password</label>
          <input
            onChange={this.handleChange}
            id='password'
            name='password'
            type='password'
            placeholder='Type password'
            value={data.password}
          />
          {errors.password && <InlineError text={errors.password}/>}
        </Form.Field>

        <Button primary type='submit'>Submit</Button>

        <List>
          <List.Item>
            <List.Icon name='question' />
            <List.Content>
              <Link to='/reset'>Forgot password</Link>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='add user' />
            <List.Content>
              <Link to='/signup'>Create Account</Link>
            </List.Content>
          </List.Item>
        </List>
      </Form>
    )
  }
}

export default LoginForm;
