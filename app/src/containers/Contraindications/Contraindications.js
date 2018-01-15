import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'Components';
import { aboutUsFormRequest, aboutUsWarningMessage } from '../../redux/actions';
import validate from '../../utils/validation/validateContraindications';
import './Contraindications.scss';
import '../../utils/validation/validation.scss';

class Contraindications extends Component {

  static propTypes = {
    aboutUsSendDataForm: PropTypes.bool,
    validation: PropTypes.object.isRequired,
    aboutUsFormRequest: PropTypes.func.isRequired,
    aboutUsWarningMessage: PropTypes.func.isRequired,
  };

  formHandler = event => {
    event.preventDefault();
    const contraindications = validate(
      this.textarea.value,
      'contraindications',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const data = {
      contraindications,
      userId: 'contraindications',
    };

    if (contraindications) {
      this.props.aboutUsFormRequest(data);
    };
  };

  render() {
    return (
      <form className='Contraindications' onSubmit={this.formHandler}>
        <h2>Противопоказания</h2>
        <textarea className={this.props.validation.contraindications
          ? 'text input-warning'
          : 'text'}
            placeholder='Введите противопоказания'
            ref={textarea => this.textarea = textarea}>
        </textarea>
        <span className={this.props.validation.contraindications
        ? 'active-warning'
        : 'not-active-warning'}> {this.props.validation.contraindications}
        </span>
        {this.props.aboutUsSendDataForm ? <Spinner /> : null}
        <input type='submit' value='Сохранить данные' className='submit-contraindications' />
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contraindications);
