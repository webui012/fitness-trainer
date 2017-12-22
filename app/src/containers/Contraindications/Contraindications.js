import React, { Component } from 'react';
import './Contraindications.scss';
import { connect } from 'react-redux';
import { waitSendData } from '../../redux/actions';

class Contraindications extends Component {
  formHandler = event => {
    this.props.waitSendData()
    event.preventDefault()
  }

  render() {
    return (
      <form className='Contraindications' onSubmit={this.formHandler}>
        <textarea className='text' placeholder='Введите противопоказания'></textarea>
        <input type='submit' value='Сохранить данные' className='submit-contraindications' />
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contraindications)
