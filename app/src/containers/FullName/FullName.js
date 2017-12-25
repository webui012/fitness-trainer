import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputFile from '../InputFile/InputFile';
import { connect } from 'react-redux';
import { formReguest } from '../../redux/actions';
import './FullName.scss';
import Loading from '../../components/Loading/Loading';

class FullName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
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

  getInputs = () => this.props.fields.map(
      field => <input type={field.type}
          placeholder={field.placeholder}
          ref={field.ref}
          key={field.id} />);


  getAvatar = () => this.props.path.userAvatar ?
      <img className='avatar' src={this.props.path.userAvatar} alt='user avatar' /> :
      <img className='avatar' src={this.props.path.defaultAvatar} alt='user avatar' />

  getLocation = data => this.setState({location: data});

  formHandler = event => {
    event.preventDefault();
    const data = {
      avatar: this.state.location,
      name: this.refs.name.value,
      patronymic: this.refs.patronymic.value,
      surname: this.refs.surname.value,
      userId: 'personalData'
    }
    this.props.formReguest(data);
    this.refs.name.value = '';
    this.refs.patronymic.value = '';
    this.refs.surname.value = '';
  }

  render() {
    console.log(this.props.formData);
    return (
      <div className='FullName'>
        {this.getAvatar()}
        <form className='full-name-form' onSubmit={this.formHandler}>
          <InputFile location={this.getLocation}/>
          {this.getInputs()}
          {this.props.spinner ? <div>{this.props.spinner}</div> : null}
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
    formReguest: data => dispatch(formReguest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullName);
