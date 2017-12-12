import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Service.scss';

const Service = props => {
    const imgSource = {
      backgroundImage: `url(${props.imgSrc})`
    }

    return (
      <Link to={`/services/${props.path}`} className='service' style={imgSource}>
        <h2>{props.serviceName}</h2>
      </Link>
    )
}

export default Service;
