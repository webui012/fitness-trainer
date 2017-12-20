import React, { Component } from 'react';
import FullName from '../../containers/FullName/FullName';
import { fullNameFields, fullNameAvatar } from './data';
import './AboutUs.scss';
import MeasuredData from '../../components/MeasuredData/MeasuredData';

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='About-us'>
        <div className='columns-wrap'>
          <FullName fields={fullNameFields} path={fullNameAvatar} />
          <MeasuredData />
          <img src='' alt='instructions for measuring points' />
        </div>
        {/*<Aims />
        <Contraindications />*/}
      </div>
    );
  }
}

export default AboutUs;
