import React, { Component } from 'react';
import FullName from '../../containers/FullName/FullName';
import { fullNameFields, fullNameAvatar, data, aimsFormData } from './data';
import './AboutUs.scss';
import MeasuredData from '../../components/MeasuredData/MeasuredData';
import Aims from '../../components/Aims/Aims';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='About-us'>
        <div className='columns-wrap'>
          <FullName fields={fullNameFields} path={fullNameAvatar} />
          <MeasuredData data={data} />
          <img src='../../images/body-sizes.jpeg' alt='instructions for measuring points' />
        </div>
        <Aims aimsFormData={aimsFormData} />
        <Contraindications />
      </div>
    );
  }
}

export default AboutUs;
