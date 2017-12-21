import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputFile from '../../components/InputFile/InputFile';
import { connect } from 'react-redux';
import { waitSendData } from '../../redux/actions';
import './FullName.scss';

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

  getSpinner = () => <div style={{
                        position: 'absolute', color: 'white', background: 'red', opacity: 0.25, fontSize: 50, padding: 500,
                        height: 1000, width: 2000, top: 0, left: 0}}>LOADING....
  </div>
//<Spinner />

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

          {/* {this.loading ? this.getSpinner() : console.log('oops') } */}

          {this.getInputs()}
          {/* {this.props.spinner ? <div>{this.props.spinner}</div> : null} */}
          {this.props.spinner ? this.getSpinner() : null }
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
