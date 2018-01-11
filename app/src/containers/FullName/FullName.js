import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputFile } from 'Components';
import { connect } from 'react-redux';
import { Spinner } from 'Components';
import { formReguest, warningMessage } from '../../redux/actions';
import './FullName.scss';
import '../../utils/validation/validation.scss';
import validate from '../../utils/validation/validateFullName';
import validateImageLoad from '../../utils/validation/validateLoadFile';

class FullName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'загрузите фото'
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
    sendDataSpinner: PropTypes.object,
    validation: PropTypes.object.isRequired,
    formReguest: PropTypes.func.isRequired,
    warningMessage: PropTypes.func.isRequired
  }

  getInputs = () => this.props.fields.map(
    field =>
      <span key={field.id}>
        <input type={field.type}
            placeholder={field.placeholder}
            ref={input => this[field.ref] = input}
            className={this.props.validation[field.ref] ? 'input-warning' : null}
        />
        <span className={this.props.validation[field.ref] ?
            'active-warning' :
            'not-active-warning'}>
            {this.props.validation[field.ref]}
        </span>
      </span>);


  getAvatar = () => this.props.path.userAvatar ?
      <img className='avatar' src={this.props.path.userAvatar} alt='user avatar' /> :
      <img className='avatar' src={this.props.path.defaultAvatar} alt='user avatar' />

  getLocation = data => this.setState({location: data});

  formHandler = event => {
    event.preventDefault();
    const avatar = validateImageLoad(
      this.state.location,
      'avatar',
      this.props.warningMessage,
      this.props.validation
    );
    const name = validate(
      this.name.value,
      'name',
      this.props.warningMessage,
      this.props.validation
    );
    const patronymic = validate(
      this.patronymic.value,
      'patronymic',
      this.props.warningMessage,
      this.props.validation
    );
    const surname = validate(
      this.surname.value,
      'surname',
      this.props.warningMessage,
      this.props.validation
    );

    const data = {
      avatar,
      name,
      patronymic,
      surname,
      userId: 'personalData'
    }

    if (name && patronymic && surname && avatar !== undefined) {
      this.props.formReguest(data);
      this.name.value = '';
      this.patronymic.value = '';
      this.surname.value = '';
      this.setState({location: 'загрузите фото'})
    }
  }

  render() {
    return (
      <div className='FullName'>
        {this.getAvatar()}
        <form className='full-name-form' onSubmit={this.formHandler}>
          <InputFile
              inputValue={this.state.location}
              location={this.getLocation}
              name={this.props.validation.avatar}
          />
          {this.getInputs()}
          {this.props.sendDataSpinner.personalData ? <Spinner /> : null}
          <input type='submit' value='Сохранить данные' className='submit-full-name' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sendDataSpinner: state.sendDataSpinner,
  validation: state.validationAboutUs
});

const mapDispatchToProps = dispatch => ({
  formReguest: data => dispatch(formReguest(data)),
  warningMessage: data => dispatch(warningMessage(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullName);
