import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import './Map.scss';
import Marker from './Marker';

/*This data for map location must be transfere in to store*/
const mapData = {
  center: { lat: 49.97, lng: 36.25 },
  zoom: 11,
  bootstrapURLKeys: { key: 'AIzaSyB-7Fn2cGaiF3_2zTedyusFSiYHGn9RfMQ' }
};

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
