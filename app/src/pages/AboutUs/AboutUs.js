import React, { Component } from 'react';
import FullName from '../../containers/FullName/FullName';
import {
  fullNameFields,
  fullNameAvatar,
  data,
  aimsFormData,
  bodySizesImg,
  formData
} from './data';
import './AboutUs.scss';
import MeasuredData from '../../components/MeasuredData/MeasuredData';
import Aims from '../../components/Aims/Aims';
import Loading from '../../components/Loading/Loading';
import Contraindications from '../../containers/Contraindications/Contraindications';
import { connect } from 'react-redux';
import { pageLoading, pageLoadingEnd } from '../../redux/actions';
import ErrorLoadingData from '../../components/ErrorLoadingData/ErrorLoadingData';
import Api from '../../redux/Api';


class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.props.pageLoading();
  }

  // componentWillMount() {
  //   this.props.pageLoading()
  // }

  componentDidMount() {
    setTimeout(() => {
      this.props.pageLoadingEnd()
    }, 2000);
  }

  render() {
    return (
      <div className='about-us'>
        <div className='columns-wrap'>
          <FullName fields={fullNameFields} path={fullNameAvatar} formData={formData} />
          <MeasuredData data={data} />
          <img className='body-sizes' src={bodySizesImg} alt='instructions for measuring points' />
        </div>
        <Aims aimsFormData={aimsFormData} />
        <Contraindications />
        {this.props.loading ? <Loading /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.load
  }
}
const mapDispatchToProps = dispatch => {
  return {
    pageLoading: data => dispatch(pageLoading(data)),
    pageLoadingEnd: data => dispatch(pageLoadingEnd(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)
