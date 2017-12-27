import React, { Component } from 'react';
import './MeasuredData.scss';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading/Loading';
import { connect } from 'react-redux';
import { formReguest } from '../../redux/actions';

class MeasuredData extends Component {

  formHandler = event => {
    event.preventDefault();
    const data = {
      age: this.refs.age.value,
      height: this.refs.height.value,
      weight: this.refs.weight.value,
      neck: this.refs.neck.value,
      breast: this.refs.breast.value,
      tail: this.refs.tail.value,
      hips: this.refs.hips.value,
      legs: this.refs.legs.value,
      userId: 'measuredData'
    }
    this.props.formReguest(data);
  }

  render() {

    const { fieldsMeasuredDataForm } = this.props.dataFields
    const { legendName, name, action, method } = this.props.dataFields.MeasuredData

    return (
      <div className='form-wrap'>
        <form name={name} action={action} method={method} onSubmit={this.formHandler}>
          <fieldset>
            <legend>{legendName}</legend>
            {this.props.spinner ? <Loading /> : null}
            {fieldsMeasuredDataForm.map((items, i) =>
              <div className='wrap-measured-data' key={i}>
                <label>{items.nameField}</label>
                <input
                    type={items.type}
                    ref={items.ref}
                    placeholder={items.placeholder} />
              </div>
            )}
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
    spinner: state.spinner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formReguest: data => dispatch(formReguest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasuredData)
