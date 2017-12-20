import React, { Component } from 'react';
import FullName from '../FullName/FullName';
import { fullNameFields, fullNameAvatar } from './data';
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
<<<<<<< HEAD
          <FullName />
          <MeasuredData
              data={data}
          />
=======
          <FullName fields={fullNameFields} path={fullNameAvatar} />
          <MeasuredData />
>>>>>>> b1e930b4437dc6add4e5ef516d32da6ad2bc196f
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
