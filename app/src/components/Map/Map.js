import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import './Map.scss';
import Marker from './Marker';
import mapData from './mapData';

class Map extends Component {
    constructor(props) {
        super(props)
        this.mapData = mapData;
    }

    render() {
        return (
          <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={this.mapData.bootstrapURLKeys}
                defaultCenter={this.mapData.center}
                defaultZoom={this.mapData.zoom}
                >
              <Marker
                  textClass='marker'
                  lat={this.mapData.center.lat}
                  lng={this.mapData.center.lng}
                  text={'WorkShop'}
                  />
            </GoogleMapReact>
          </div>
        );
    }
}

Map.propTypes = {
    center: PropTypes.number,
    zoom: PropTypes.number,
    key: PropTypes.string,
    bootstrapURLKeys: PropTypes.string
};

export default Map;
