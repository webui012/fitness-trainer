import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formReguest } from '../../redux/actions';
import './Contraindications.scss';

class Contraindications extends Component {

  formHandler = event => {
      event.preventDefault();
      const data = {
        contraindications: this.refs.textarea.value,
        userId: 'contraindications'
      }
      this.props.formReguest(data);
      this.refs.textarea.value = '';
    }

  render() {
    return (
      <form className='Contraindications' onSubmit={this.formHandler}>
        <textarea className='text' placeholder='Введите противопоказания' ref='textarea'></textarea>
        {this.props.spinner ? <div>{this.props.spinner}</div> : null}
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
    formReguest: data => dispatch(formReguest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contraindications)
