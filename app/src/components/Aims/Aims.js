import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Aims.scss';
import { connect } from 'react-redux';
import { formReguest, warningMessage } from '../../redux/actions';
import '../../utils/validation/validation.scss';
import validate from '../../utils/validation/validateAims';

class Aims extends Component {
  formHandler = event => {
    event.preventDefault()

    const aims = validate(
      this.select.value,
      'aims',
      this.props.warningMessage,
      this.props.validation
    );

    const data = {
      aims,
      userId:'aimsData'
    }

    if (aims) {
      this.props.formReguest(data)
    }
  }

  render() {
    const { nameField, options } = this.props.aimsFormData
    return (
      <div className='aims-wrap'>
        <label>{nameField}</label>
        <div>
          <select ref={select => this.select = select} className={this.props.validation['aims'] ? 'select-warning' : null}>
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
        {this.props.sendDataSpinner.aimsData ? <div>{this.props.sendDataSpinner.aimsData}</div> : null}
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

Aims.propTypes = {
    nameField: PropTypes.string,
    selectName: PropTypes.string,
    optionValue: PropTypes.string,
    options: PropTypes.array
}

const mapStateToProps = state => {
  return {
    sendDataSpinner: state.sendDataSpinner,
    validation: state.validationAboutUs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formReguest: data => dispatch(formReguest(data)),
    warningMessage: data => dispatch(warningMessage(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aims)
