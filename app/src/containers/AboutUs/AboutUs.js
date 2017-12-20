import React, { Component } from 'react';
import './AboutUs.scss';
import { MeasuredData } from '../containers/MeasuredData/MeasuredData';
import Aims from '../containers/Aims';
import { data, aimsFormData } from '../../containers/AboutUs/data';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='About-us'>
        <div className='columns-wrap'>
          <FullName />
          <MeasuredData
              data={data}
          />
          <img src='' alt='instructions for measuring points' />
        </div>
        <Aims
            data={aimsFormData}
        />
        <Contraindications />
      </div>
    );
  }
}

export default AboutUs;
