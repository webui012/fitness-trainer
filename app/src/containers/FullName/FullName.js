import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputFile from '../../components/InputFile/InputFile';
import './FullName.scss';

class FullName extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className='FullName'>
        {this.getAvatar()}
        <form className='full-name-form'>
          <InputFile />
          {this.getInputs()}
          <input type='submit' value='Сохранить данные' className='submit-full-name' />
        </form>
      </div>
    )
  }
}

export default FullName;
