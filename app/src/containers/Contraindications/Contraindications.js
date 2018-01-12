import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner } from 'Components';
import { formReguest, warningMessage } from '../../redux/actions';
import validate from '../../utils/validation/validateContraindications';
import './Contraindications.scss';
import '../../utils/validation/validation.scss';

class Contraindications extends Component {

  static propTypes = {
    sendDataSpinner: PropTypes.object,
    validation: PropTypes.object.isRequired,
    formReguest: PropTypes.func.isRequired,
    warningMessage: PropTypes.func.isRequired
  }

  formHandler = event => {
    event.preventDefault();
    const contraindications = validate(
      this.textarea.value,
      'contraindications',
      this.props.warningMessage,
      this.props.validation
    );

    const data = {
      contraindications,
      userId: 'contraindications'
    };

    if (contraindications) {
      this.props.formReguest(data);
    };
  }

  render() {
    return (
      <form className='Contraindications' onSubmit={this.formHandler}>
        <h2>Противопоказания</h2>
        <textarea className={this.props.validation['contraindications']
          ?'text input-warning'
          : 'text'}
            placeholder='Введите противопоказания'
            ref={textarea => this.textarea = textarea}>
        </textarea>
        <span className={this.props.validation['contraindications']
        ?'active-warning'
        : 'not-active-warning'}> {this.props.validation['contraindications']}
        </span>
        {this.props.sendDataSpinner.contraindications
        ? <Spinner />
        : null}
        <input type='submit' value='Сохранить данные' className='submit-contraindications' />
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contraindications);
