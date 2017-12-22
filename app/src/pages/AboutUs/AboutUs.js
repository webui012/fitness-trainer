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
import Contraindications from '../../containers/Contraindications/Contraindications';
import ErrorLoadingData from '../../components/ErrorLoadingData/ErrorLoadingData';


class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='about-us'>
        <div className='columns-wrap'>
          <FullName fields={fullNameFields} path={fullNameAvatar} formData={formData}/>
          <MeasuredData data={data} />
          <img className='body-sizes' src={bodySizesImg} alt='instructions for measuring points' />
        </div>
        <Aims aimsFormData={aimsFormData} />
        <Contraindications />
      </div>
    );
  }
}

export default AboutUs;
