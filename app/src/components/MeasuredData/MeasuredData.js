import React, { Component } from 'react';
import './MeasuredData.scss';
import PropTypes from 'prop-types';
import { Loading } from 'Components';
import { connect } from 'react-redux';
import { formReguest, warningMessage } from '../../redux/actions';
import '../../utils/validation/validation.scss';
import validate from '../../utils/validation/validateMeasuredData';

class MeasuredData extends Component {

  formHandler = event => {
    event.preventDefault();

    const age = validate(
      this.age.value,
      'age',
      this.props.warningMessage,
      this.props.validation
    )

    const height = validate(
      this.height.value,
      'height',
      this.props.warningMessage,
      this.props.validation
    )

    const weight = validate(
      this.weight.value,
      'weight',
      this.props.warningMessage,
      this.props.validation
    )

    const neck = validate(
      this.neck.value,
      'neck',
      this.props.warningMessage,
      this.props.validation
    )

    const breast = validate(
      this.breast.value,
      'breast',
      this.props.warningMessage,
      this.props.validation
    )

    const tail = validate(
      this.tail.value,
      'tail',
      this.props.warningMessage,
      this.props.validation
    )

    const hips = validate(
      this.hips.value,
      'hips',
      this.props.warningMessage,
      this.props.validation
    )

    const legs = validate(
      this.legs.value,
      'legs',
      this.props.warningMessage,
      this.props.validation
    )

    const data = {
      age,
      height,
      weight,
      neck,
      breast,
      tail,
      hips,
      legs,
      userId: 'measuredData'
    }

    if (age && height && weight && neck && breast && tail && hips && legs) {
      this.props.formReguest(data)
    }
  }

  render() {

    const { fieldsMeasuredDataForm } = this.props.dataFields
    const { legendName, name, action, method } = this.props.dataFields.MeasuredData

    return (
      <div className='form-wrap'>
        <form name={name} action={action} method={method} onSubmit={this.formHandler}>
          <fieldset>
            <legend>{legendName}</legend>
            {fieldsMeasuredDataForm.map((items, i) =>
              <div className='wrap-measured-data' key={i} >
                <label>{items.nameField}</label>
                <input
                    type={items.type}
                    ref={input => this[items.ref] = input}
                    placeholder={items.placeholder}
                    className={this.props.validation[`${items.ref}`] ? 'input-warning-data' : null} />
                <span className={this.props.validation[`${items.ref}`] ? 'active-warning input-warning-data' : 'not-active-warning'}>
                  {this.props.validation[`${items.ref}`]}
                </span>
              </div>
            )}
            {this.props.sendDataSpinner.measuredData ? <div>{this.props.sendDataSpinner.measuredData}</div> : null}
            <input type='submit' value='Сохранить данные' className='submit-full-name' />
          </fieldset>
        </form>
      </div>
    )
  }
}

MeasuredData.PropTypes = {
  type: PropTypes.string,
  nameLabel: PropTypes.string,
  ref: PropTypes.string,
  nameField: PropTypes.string,
  placeholder: PropTypes.string,
  legendName: PropTypes.string,
  name: PropTypes.string,
  action: PropTypes.string,
  method: PropTypes.string,
  fieldsMeasuredDataForm: PropTypes.array
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

export default connect(mapStateToProps, mapDispatchToProps)(MeasuredData)
