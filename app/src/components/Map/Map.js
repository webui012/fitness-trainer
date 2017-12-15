import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import './Map.scss';
import Marker from './Marker';

const Map = props => {
  const { bootstrapURLKeys,
          center,
          zoom,
          lng,
          lat,
          text,
        } = props.data
    return (
      <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys={bootstrapURLKeys}
            defaultCenter={center}
            defaultZoom={zoom}
            >
          <Marker
              textClass='marker'
              lat={center.lat}
              lng={center.lng}
              text={text}
                />
        </GoogleMapReact>
      </div>
    );
}

Map.propTypes = {
    center: PropTypes.number,
    zoom: PropTypes.number,
    text: PropTypes.string,
    key: PropTypes.string,
    bootstrapURLKeys: PropTypes.string
};

export default Map;
