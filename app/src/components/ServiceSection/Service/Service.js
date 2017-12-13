import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Service.scss';
import PropTypes from 'prop-types';

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

Service.propTypes = {
  imgSrc: PropTypes.string,
  path: PropTypes.string,
  serviceName: PropTypes.string
}
export default Service;
