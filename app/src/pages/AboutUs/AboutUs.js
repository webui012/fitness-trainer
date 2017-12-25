import React, { Component } from 'react';
import FullName from '../../containers/FullName/FullName';
import { fullNameFields, fullNameAvatar, data, aimsFormData, bodySizesImg } from './data';
import './AboutUs.scss';
import MeasuredData from '../../components/MeasuredData/MeasuredData';
import Aims from '../../components/Aims/Aims';
import Loading from '../../components/Loading/Loading';
import Contraindications from '../../containers/Contraindications/Contraindications';
import { connect } from 'react-redux';
import { pageLoading } from '../../redux/actions';


class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.pageLoading()
  }

  componentDidMount() {
    this.props.pageLoadingEnd()
  }

  render() {
    return (
      <div className='about-us'>
        <div className='columns-wrap'>
          <FullName fields={fullNameFields} path={fullNameAvatar} />
          <MeasuredData data={data} />
          <img className='body-sizes' src={bodySizesImg} alt='instructions for measuring points' />
        </div>
        <Aims aimsFormData={aimsFormData} />
        <Contraindications />
        {this.props.spinner ? <Loading /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spinner: state.spinner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pageLoading: () => dispatch(pageLoading()),
    pageLoadingEnd: () => dispatch(pageLoadingEnd())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)
