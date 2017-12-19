import React, { Component } from 'react';
import './AboutUs.scss';
import { MeasuredData } from '../MeasuredData/MeasuredData';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='About-us'>
        <div className='columns-wrap'>
          <FullName />
          <MeasuredData />
          <img src='' alt='instructions for measuring points' />
        </div>
        <Aims />
        <Contraindications />
      </div>
    );
  }
}

export default AboutUs;
