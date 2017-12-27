import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formReguest, validationContraindicationsWarning } from '../../redux/actions';
import '../../redux/Api/validation/validation.scss';
import validate from '../../redux/Api/validation/validateContraindications';
import './Contraindications.scss';

class Contraindications extends Component {

  formHandler = event => {
    event.preventDefault();
    const contraindications = validate(
      this.refs.textarea.value,
      contraindications,
      this.props.validationContraindicationsWarning,
      this.props.validation
    );

    const data = {
      contraindications,
      userId: 'contraindications'
    }

    if (contraindications) {
      this.props.formReguest(data);
      this.refs.textarea.value = '';
    }
  }

  render() {
    return (
      <form className='Contraindications' onSubmit={this.formHandler}>
        <textarea
          className={this.props.validation['contraindications'] ? 'text input-warning' : 'text'}
          placeholder='Введите противопоказания'
          ref='textarea'></textarea>
        <span className={this.props.validation['contraindications'] ? 'active-warning' : 'not-active-warning'}>
            {this.props.validation['contraindications']}
        </span>
        {this.props.spinner ? <div>{this.props.spinner}</div> : null}
        <input type='submit' value='Сохранить данные' className='submit-contraindications' />
      </form>
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
    validationContraindicationsWarning: data => dispatch(validationContraindicationsWarning(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contraindications)
