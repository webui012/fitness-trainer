import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Aims.scss';
import { connect } from 'react-redux';
import { formReguest, warningMessage } from '../../redux/actions';
import '../../redux/Api/validation/validation.scss';
import validate from '../../redux/Api/validation/validateAims';

class Aims extends Component {
  formHandler = event => {
    event.preventDefault()
    const aims = validate(
      this.refs.select.value,
      'aims',
      this.props.warningMessage,
      this.props.validation
    );

    const data = {
      aims: this.refs.select.value,
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
          <select ref='select' className={this.props.validation['aims'] ? 'text input-warning' : 'text'}>
            <option className='default-option'>Выберите цель ваших тренировок...</option>
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
