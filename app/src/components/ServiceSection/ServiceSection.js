import React, {Component} from 'react';
import {Service} from 'Components';

import './ServiceSection.scss';

const ServiceSection = props => {
  const servicesData = props.data;

  return (
    <section className='service-section'>
      {
        servicesData.map(service => {
          return (
            <Service key={service.id}
                path={service.path}
                serviceName={service.serviceName}
                imgSrc={service.imgSrc}
            />
           )
        })
      }
    </section>
  )
}

export default ServiceSection
