import React, { Component } from 'react';
import FullName from '../../containers/FullName/FullName';
// import {
//   fullNameFields,
//   fullNameAvatar,
//   aimsFormData, dataFields,
//   bodySizesImg,
//   formData
// } from './data';
import './AboutUs.scss';
import MeasuredData from '../../components/MeasuredData/MeasuredData';
import Aims from '../../components/Aims/Aims';
import Loading from '../../components/Loading/Loading';
import Contraindications from '../../containers/Contraindications/Contraindications';
import { connect } from 'react-redux';
import {
  pageLoading,
  pageLoadingEnd,
  showErrorMessage,
  closeErrorMessage
} from '../../redux/actions';
import ErrorLoadingData from '../../components/ErrorLoadingData/ErrorLoadingData';
import Api from '../../redux/Api';


class AboutUs extends Component {

  componentDidMount() {
    this.props.pageLoading()
    this.props.pageLoadingEnd(this.props.data)
  }

  render() {
    // const {
    //         fullNameFields,
    //         fullNameAvatar,
    //         aimsFormData,
    //         dataFields,
    //         bodySizesImg,
    //         formData
    //       } = this.props.data

    return (this.props.data?
      <div className='about-us'>
        <div className='columns-wrap'>
          <FullName
              fields={this.props.data.fullNameFields}
              path={this.props.data.fullNameAvatar}
              formData={this.props.data.formData}
          />
          <MeasuredData dataFields={this.props.data.dataFields} />
          <img className='body-sizes' src={this.props.data.bodySizesImg} alt='instructions for measuring points' />
        </div>
        <Aims aimsFormData={this.props.data.aimsFormData} />
        <Contraindications />
        {this.props.errorMessage ? <ErrorLoadingData closeMessage={this.props.closeErrorMessage} /> : null}
      </div> : <Loading />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.AboutUs.loading,
    data: state.AboutUs.data,
    errorMessage: state.errorMessage
  }
}
const mapDispatchToProps = dispatch => {
  return {
    pageLoading: () => dispatch(pageLoading()),
    pageLoadingEnd: data => dispatch(pageLoadingEnd(data)),
    closeErrorMessage: data => dispatch(closeErrorMessage(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)
