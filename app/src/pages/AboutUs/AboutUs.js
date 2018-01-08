import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Aims, MeasuredData, Loading, ErrorLoadingData } from 'Components';
import { Contraindications, FullName } from 'Containers';
import { connect } from 'react-redux';
import { pageLoading, pageLoadingEnd, closeErrorMessage } from '../../redux/actions';
import Api from '../../redux/Api';
import './AboutUs.scss';

class AboutUs extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    errorMessage: PropTypes.bool,
    pageLoading: PropTypes.func,
    pageLoadingEnd: PropTypes.func,
    closeErrorMessage: PropTypes.func
  }

  componentDidMount() {
    this.props.pageLoading()
  }

  render() {
    return (this.props.data?
      <div className='about-us'>
        <div className='columns-wrap'>
          <FullName
              fields={this.props.data.fullNameFields}
              path={this.props.data.fullNameAvatar}
              formData={this.props.data.formData}
          />
          <MeasuredData dataFields={this.props.data.dataFields} />
          <img className='body-sizes'
              src={this.props.data.bodySizesImg}
              alt='instructions for measuring points'
          />
        </div>
        <Aims aimsFormData={this.props.data.aimsFormData} />
        <Contraindications />
        {this.props.errorMessage ?
          <ErrorLoadingData closeMessage={this.props.closeErrorMessage} /> : null}
      </div> : <Loading />
    )
  }
}

const mapStateToProps = state => ({
  loading: state.AboutUs.loading,
  data: state.AboutUs.data,
  errorMessage: state.sendDataSpinner.errorMessage
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(pageLoading()),
  pageLoadingEnd: data => dispatch(pageLoadingEnd(data)),
  closeErrorMessage: data => dispatch(closeErrorMessage(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
