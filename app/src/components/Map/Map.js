import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './Map.scss';
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
      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={this.mapData.bootstrapURLKeys}
          defaultCenter={this.mapData.center}
          defaultZoom={this.mapData.zoom}
        >
          <Marker
            textClass={styles.marker}
            lat={this.mapData.center.lat}
            lng={this.mapData.center.lng}
            text={'WorkShop'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
