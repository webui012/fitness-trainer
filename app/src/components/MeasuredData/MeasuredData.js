import React, { Component } from 'react';
import './MeasuredData.scss';
import MeasuredDataForm from './MeasuredDataForm';
import Loading from '../../components/Loading/Loading';
import { connect } from 'react-redux';
import { waitSendData } from '../../redux/actions';

class MeasuredData extends Component {
  formHandler = event => {
    this.props.waitSendData()
    event.preventDefault()
  }

  render() {

    const { name, action, method, fieldsMeasuredDataForm } = this.props.data;
    const { legendName } = this.props.data.MeasuredData

    return (
      <div className='form-wrap'>
        <form name={name} action={action} method={method} onSubmit={this.formHandler}>
          <fieldset>
            <legend>{legendName}</legend>
            {this.props.spinner ? <Loading /> : null}
            {fieldsMeasuredDataForm.map((items, i) =>
              <MeasuredDataForm
                  key={i}
                  type={items.type}
                  nameField={items.nameField}
                  placeholder={items.placeholder}
              />
            )}
            <input type='submit' value='Сохранить данные' className='submit-full-name' />
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spinner: state.spinner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    waitSendData: () => dispatch(waitSendData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasuredData)
