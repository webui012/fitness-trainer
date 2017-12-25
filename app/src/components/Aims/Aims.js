import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Aims.scss';
import Loading from '../../components/Loading/Loading';
import { connect } from 'react-redux';
import { formReguest } from '../../redux/actions';

class Aims extends Component {
  formHandler = event => {
    event.preventDefault()
    const data = {
      aims: this.refs.select.value,
      userId:'aimsData'
    }
    this.props.formReguest(data)
  }

  render() {
    const { nameField, options } = this.props.aimsFormData
    return (
      <div className='aims-wrap'>
        <label>{nameField}</label>
        <div>
          <select ref='select'>
            <option className='default-option'>Выберите цель ваших тренировок...</option>
            {options.map((items, i) =>
              <option
                  key={i}
                  value={items.optionValue}
              >{items.optionInfo}</option>
            )}
          </select>
        </div>
        {this.props.spinner ? <Loading /> : null}
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
    spinner: state.spinner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formReguest: data => dispatch(formReguest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aims)
