import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'Components';
import { connect } from 'react-redux';
import { aboutUsFormRequest, aboutUsWarningMessage } from '../../redux/actions';
import './FullName.scss';
import '../../utils/validation/validation.scss';
import validate from '../../utils/validation/validateFullName';
import validateImageLoad from '../../utils/validation/validateLoadFile';

class FullName extends Component {

  static defaultProps = {
    fields: [],
  };

  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      placeholder: PropTypes.string,
      ref: PropTypes.string,
      id: PropTypes.string,
    })),
    aboutUsSendDataForm: PropTypes.bool,
    validation: PropTypes.object.isRequired,
    aboutUsFormRequest: PropTypes.func.isRequired,
    aboutUsWarningMessage: PropTypes.func.isRequired,
  };

  getInputs = () => this.props.fields.map(
    field =>
      <div key={field.id}>
        <div className='info-filed-wrap'>
          <label>{field.nameField}</label>
          <input type={field.type}
              placeholder={field.placeholder}
              ref={input => this[field.ref] = input}
              className={this.props.validation[field.ref] ? 'input-warning' : null}
          />
        </div>
        <span className={this.props.validation[field.ref]
          ? 'active-warning'
          : 'not-active-warning'}> {this.props.validation[field.ref]}
        </span>
      </div>);

  formHandler = event => {
    event.preventDefault();

    const name = validate(
      this.name.value,
      'name',
      this.props.aboutUsWarningMessage,
      this.props.validation,
      this.props.fields[0].type
    );
    const surname = validate(
      this.surname.value,
      'surname',
      this.props.aboutUsWarningMessage,
      this.props.validation,
      this.props.fields[1].type
    );
    const birth = validate(
      this.birth.value,
      'birth',
      this.props.aboutUsWarningMessage,
      this.props.validation,
      this.props.fields[2].type
    );

    const height = validate(
      this.height.value,
      'height',
      this.props.aboutUsWarningMessage,
      this.props.validation,
      this.props.fields[3].type
    );

    const weight = validate(
      this.weight.value,
      'weight',
      this.props.aboutUsWarningMessage,
      this.props.validation,
      this.props.fields[4].type
    );

    const data = {
      name,
      surname,
      birth,
      height,
      weight,
      userId: 'personalData',
    };

    if (name && surname && birth && height && weight !== undefined) {
      this.props.aboutUsFormRequest(data);
    };
  };

  render() {
    return (
      <div className='FullName'>
        <div className='personal-info-wrap'>
          <form className='full-name-form' onSubmit={this.formHandler}>
            <legend>Персональная информация</legend>
            {this.getInputs()}
            {this.props.aboutUsSendDataForm ? <Spinner /> : null}
            <input type='submit' value='Сохранить данные' className='submit-full-name' />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aboutUsSendDataForm: state.aboutUsSendDataForm.sendData,
  validation: state.validationAboutUs,
});

const mapDispatchToProps = dispatch => ({
  aboutUsFormRequest: data => dispatch(aboutUsFormRequest(data)),
  aboutUsWarningMessage: data => dispatch(aboutUsWarningMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullName);
