import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputFile from '../../components/InputFile/InputFile';
import { connect } from 'react-redux';
import { waitSendData } from '../../redux/actions';
import './FullName.scss';
import Loading from '../../components/Loading/Loading';

class FullName extends Component {
  constructor(props) {
    super(props);
    this.loading = true;//state props for rendering spinner component
  }

  static defaultProps = {
    fields: []
  }

  static propTypes = {
    path: PropTypes.object.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      placeholder: PropTypes.string,
      ref: PropTypes.string,
      id: PropTypes.string
    })),
  }

  getInputs = () => {
    const allFields = this.props.fields.map(
      field => <input type={field.type}
          placeholder={field.placeholder}
          ref={field.ref}
          key={field.id} />
    );
    return allFields;
  }

  getAvatar = () => {
    const image = this.props.path.userAvatar ?
      <img className='avatar' src={this.props.path.userAvatar} alt='user avatar' /> :
      <img className='avatar' src={this.props.path.defaultAvatar} alt='user avatar' />
    return image;
  }

  formHandler = event => {
      this.props.waitSendData()
      event.preventDefault()
  }

  render() {
    return (
      <div className='FullName'>
        {this.getAvatar()}
        <form className='full-name-form' onSubmit={this.formHandler}>
          <InputFile />
          {this.getInputs()}
          {/* {this.props.spinner ? <div>{this.props.spinner}</div> : null} */}
          {this.props.spinner ? <Loading /> : null }
          <input type='submit' value='Сохранить данные' className='submit-full-name' />
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

export default connect(mapStateToProps, mapDispatchToProps)(FullName);
