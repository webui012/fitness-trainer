import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { aboutUsFormRequest, aboutUsWarningMessage } from '../../redux/actions';
import validateImageLoad from '../../utils/validation/validateLoadFile';
import '../../utils/validation/validation.scss';
import './Avatar.scss';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'загрузите фото',
    };
  }

  static propTypes = {
    path: PropTypes.object.isRequired,
  };

  changeLocation = event => this.setState({ location: event.target.value });

  saveAvatarHandler = event => {
    event.preventDefault();

    const avatar = validateImageLoad(
      this.state.location,
      'avatar',
      this.props.aboutUsWarningMessage,
      this.props.validation
    );

    if (avatar) {
      const formData = new FormData(this.form);
      console.log(this.file.files[0]);
      formData.append('avatar', this.file.files[0]);
      const data = { formData, userId: 'avatar' };
      this.props.aboutUsFormRequest(data);
    };

    this.setState({ location: 'загрузите фото' });
  };

  render() {
    return (
      <form
          className='avatar-wrap'
          onSubmit={this.saveAvatarHandler}
          ref={form => this.form = form}>
        <img className='avatar' src={this.props.path.userAvatar} alt='user avatar' />
        <div className='input-file'>
          <div className={this.state.location === 'загрузите фото' ?
            'file-address' : 'file-address-transparent'}>
            {this.state.location}
          </div>
          {this.props.validation.avatar !== null ?
            <span className='active-warning'>{this.props.validation.avatar}</span> :
            <span className='not-active-warning'></span>}
          <input
              type='file'
              className='load-avatar'
              ref={input => this.file = input}
              onChange={this.changeLocation} />
        </div>
        {this.state.location !== 'загрузите фото' ?
          <input type='submit' className='save-avatar' value='Сохранить фото' /> : null}
      </form>
    );
  }
}

const mapStateToProps = state => ({
  validation: state.validationAboutUs,
});

const mapDispatchToProps = dispatch => ({
  aboutUsFormRequest: data => dispatch(aboutUsFormRequest(data)),
  aboutUsWarningMessage: data => dispatch(aboutUsWarningMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

// import React from 'react';
// import PropTypes from 'prop-types';
// import './InputFile.scss';
//
// const InputFile = props => {
//   const loadHandler = event => {
//     props.location(event.target.value);
//   };
//
//   return (
//     <div className='InputFile'>
//       <div className='file-address'>{props.inputValue}</div>
//       {props.name !== null ?
//         <span className='active-warning'>{props.name}</span> :
//         <span className='not-active-warning'>{props.name}</span>}
//       <input type='file' className='load-avatar' onChange={loadHandler}/>
//     </div>
//   );
// };
//
// InputFile.propTypes = {
//   inputValue: PropTypes.string.isRequired,
//   name: PropTypes.string,
//   location: PropTypes.func.isRequired,
// };
//
// export default InputFile;
