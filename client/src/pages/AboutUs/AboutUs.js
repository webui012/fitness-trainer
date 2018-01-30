import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Aims, Avatar, MeasuredData, ErrorLoadingData, Spinner } from 'Components';
import { Contraindications, FullName } from 'Containers';
import { connect } from 'react-redux';
import { aboutUsGetData, closeErrorMessage } from '../../redux/actions';
import './AboutUs.scss';

class AboutUs extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    errorMessage: PropTypes.bool,
    aboutUsGetData: PropTypes.func,
    aboutUsGetDataEnd: PropTypes.func,
    closeErrorMessage: PropTypes.func,
  };

  componentDidMount() {
    this.props.aboutUsGetData();
  };

  render() {
    return (this.props.data
      ? <div className='about-us'>
        <div className='avatar-fullname-wrap'>
          <Avatar path={this.props.data.fullNameAvatar} />
          <FullName
              fields={this.props.data.fullNameFields}
              formData={this.props.data.formData}
          />
        </div>
        <div className='columns-wrap'>
          <MeasuredData dataFields={this.props.data.dataFields} />
          <div className='add-info-wrap'>
            <Aims aimsFormData={this.props.data.aimsFormData} />
            <Contraindications />
          </div>
          {this.props.errorMessage ?
            <ErrorLoadingData closeMessage={this.props.closeErrorMessage} /> : null}
        </div>
      </div>
      : <Spinner />
    );
  }
}

const mapStateToProps = state => ({
  data: state.aboutUsGetData.data,
  errorMessage: state.aboutUsSendDataForm.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  aboutUsGetData: () => dispatch(aboutUsGetData()),
  closeErrorMessage: data => dispatch(closeErrorMessage(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
