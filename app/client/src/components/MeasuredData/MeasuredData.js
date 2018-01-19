import React, { Component } from 'react';
import './MeasuredData.scss';
import PropTypes from 'prop-types';
import { Spinner } from 'Components';
import { connect } from 'react-redux';
import { aboutUsFormRequest, aboutUsWarningMessage } from '../../redux/actions';
import '../../utils/validation/validation.scss';
import validate from '../../utils/validation/validateMeasuredData';

class MeasuredData extends Component {

  static propTypes = {
    type: PropTypes.string,
    nameLabel: PropTypes.string,
    ref: PropTypes.string,
    nameField: PropTypes.string,
    placeholder: PropTypes.string,
    legendName: PropTypes.string,
    name: PropTypes.string,
    action: PropTypes.string,
    method: PropTypes.string,
    fieldsMeasuredDataForm: PropTypes.array,
  };

  formHandler = event => {
    event.preventDefault();

    const age = validate(
      this.age.value,
      'age',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const height = validate(
      this.height.value,
      'height',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const weight = validate(
      this.weight.value,
      'weight',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const neck = validate(
      this.neck.value,
      'neck',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const breast = validate(
      this.breast.value,
      'breast',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const tail = validate(
      this.tail.value,
      'tail',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const hips = validate(
      this.hips.value,
      'hips',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    const data = {
      userId: 'measuredData',
      data: { age, height, weight, neck, breast, tail, hips },
    };

    if (age && height && weight && neck && breast && tail && hips) {
      this.props.aboutUsFormRequest(data);
    };
  };

  render() {

    const { fieldsMeasuredDataForm } = this.props.dataFields;
    const { legendName, name, action, method } = this.props.dataFields.MeasuredData;

    return (
      <div className='form-wrap'>
        <form name={name} action={action} method={method} onSubmit={this.formHandler}>
          <fieldset>
            <legend>{legendName}</legend>
            {fieldsMeasuredDataForm.map((items, i) =>
              <div className='wrap-measured-data' key={i}>
                <div className='position-wrap'>
                  <label>{items.nameField}</label>
                  <input
                      type={items.type}
                      ref={input => this[items.ref] = input}
                      placeholder={items.placeholder}
                      className={this.props.validation[items.ref]
                      ? 'input-warning-data'
                      : null}
                  />
                </div>
                <span className={this.props.validation[items.ref]
                  ? 'active-warning input-warning-data'
                  : 'not-active-warning'}> {this.props.validation[items.ref]}
                </span>
              </div>
            )}
            {this.props.aboutUsSendDataForm ? <Spinner /> : null}
            <input type='submit' value='Сохранить данные' className='submit-full-name' />
          </fieldset>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(MeasuredData);
