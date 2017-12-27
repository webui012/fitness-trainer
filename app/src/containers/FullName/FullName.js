import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputFile from '../InputFile/InputFile';
import { connect } from 'react-redux';
import {
  formReguest,
  validationNameWarning,
  validationPatronymicWarning,
  validationSurnameWarning
} from '../../redux/actions';
import './FullName.scss';
import Loading from '../../components/Loading/Loading';
import '../../redux/Api/validation/validation.scss';
import validate from '../../redux/Api/validation/validateFullName';

class FullName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  static defaultProps = {
    fields: []
  }

  static propTypes = {
    path: PropTypes.object.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      placeholder: PropTypes.string,
      ref: PropTypes.string,
      id: PropTypes.string
    })),
  }

  getInputs = () => this.props.fields.map(
      field =>
      <span key={field.id}>
        <input type={field.type}
            placeholder={field.placeholder}
            ref={field.ref}
            className={this.props.validation[`${field.ref}`] ? 'input-warning' : null}/>
        <span className={this.props.validation[`${field.ref}`] ? 'active-warning' : 'not-active-warning'}>
          {this.props.validation[`${field.ref}`]}
        </span>
      </span>);


  getAvatar = () => this.props.path.userAvatar ?
      <img className='avatar' src={this.props.path.userAvatar} alt='user avatar' /> :
      <img className='avatar' src={this.props.path.defaultAvatar} alt='user avatar' />

  getLocation = data => this.setState({location: data});

  formHandler = event => {
    event.preventDefault();
    const name = validate(
      this.refs.name.value,
      name,
      this.props.validationNameWarning,
      this.props.validation
    );
    const patronymic = validate(
      this.refs.patronymic.value,
      patronymic,
      this.props.validationPatronymicWarning,
      this.props.validation
    );
    const surname = validate(
      this.refs.surname.value,
      surname,
      this.props.validationSurnameWarning,
      this.props.validation
    );

    const data = {
      avatar: this.state.location,
      name,
      patronymic,
      surname,
      userId: 'personalData'
    }

    if (name && patronymic && surname) {
      this.props.formReguest(data);
      this.refs.name.value = '';
      this.refs.patronymic.value = '';
      this.refs.surname.value = '';
    }
  }

  render() {
    console.log('render');
    return (
      <div className='FullName'>
        {this.getAvatar()}
        <form className='full-name-form' onSubmit={this.formHandler}>
          <InputFile location={this.getLocation}/>
          {this.getInputs()}
          {this.props.spinner ? <div>{this.props.spinner}</div> : null}
          <input type='submit' value='Сохранить данные' className='submit-full-name' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spinner: state.spinner,
    validation: state.validationAboutUs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formReguest: data => dispatch(formReguest(data)),
    validationNameWarning: data => dispatch(validationNameWarning(data)),
    validationPatronymicWarning: data => dispatch(validationPatronymicWarning(data)),
    validationSurnameWarning: data => dispatch(validationSurnameWarning(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullName);
