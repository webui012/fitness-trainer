import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import './Map.scss';
import Marker from './Marker';

const Map = props => {
    return (
      <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys={props.data.bootstrapURLKeys}
            defaultCenter={props.data.center}
            defaultZoom={props.data.zoom}
            >
          <Marker
              textClass='marker'
              lat={props.data.center.lat}
              lng={props.data.center.lng}
              text={props.data.text}
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
