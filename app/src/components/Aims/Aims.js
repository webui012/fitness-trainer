import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Aims.scss';
import { connect } from 'react-redux';
import { Spinner } from 'Components';
import { aboutUsFormRequest, aboutUsWarningMessage } from '../../redux/actions';
import '../../utils/validation/validation.scss';
import validate from '../../utils/validation/validateAims';

class Aims extends Component {

  static propTypes = {
    nameField: PropTypes.string,
    selectName: PropTypes.string,
    optionValue: PropTypes.string,
    options: PropTypes.array
  }

  formHandler = event => {
    event.preventDefault()

    const aims = validate(
      this.select.value,
      'aims',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const data = {
      aims,
      userId:'aimsData'
    }

    if (aims) {
      this.props.aboutUsFormRequest(data);
    }
  }

  render() {
    const { nameField, options } = this.props.aimsFormData
    return (
      <div className='aims-wrap'>
        <label>{nameField}</label>
        <div>
          <select ref={select => this.select = select} id='select-aims' className={this.props.validation['aims'] ? 'select-warning' : null}>
            <option id='default-option'>Выберите цель ваших тренировок...</option>
            {options.map((items, i) =>
              <option
                  key={i}
                  value={items.optionValue}
              >{items.optionInfo}</option>
            )}
          </select>
          <span className={this.props.validation['aims'] ? 'active-warning' : 'not-active-warning'}>
            {this.props.validation['aims']}
          </span>
        </div>
        {this.props.aboutUsSendDataForm.aimsData ? <Spinner /> : null}
        <input
            type='submit'
            value='Сохранить данные'
            className='submit-full-name'
            onClick={this.formHandler}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    aboutUsSendDataForm: state.aboutUsSendDataForm,
    validation: state.validationAboutUs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    aboutUsFormRequest: data => dispatch(aboutUsFormRequest(data)),
    aboutUsWarningMessage: data => dispatch(aboutUsWarningMessage(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aims)
