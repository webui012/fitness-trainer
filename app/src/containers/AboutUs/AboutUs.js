import React, { Component } from 'react';
import FullName from '../FullName/FullName';
import { fullNameFields, fullNameAvatar, data, aimsFormData } from './data';
import './AboutUs.scss';
import { MeasuredData } from '../containers/MeasuredData/MeasuredData';
import Aims from '../containers/Aims';


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
          <img src='' alt='instructions for measuring points' />
        </div>
        <Aims data={aimsFormData} />
        <Contraindications />
      </div>
    );
  }
}

export default AboutUs;
