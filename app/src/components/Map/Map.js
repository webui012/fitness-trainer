import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (<div style={{
    position: 'relative', color: 'black', background: 'red',
    height: 15, width: 15, top: -20, left: -30, borderRadius: 50
}}>
    <span style={{ paddingLeft: 20, fontSize: 16, fontWeight: 600 }}>{text}</span>
</div>);

class Map extends Component {
    static defaultProps = {
        center: { lat: 49.95, lng: 36.33 },
        zoom: 11
    };

    render() {
        return (
            <div className="map">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={49.955413}
                        lng={36.337844}
                        text={'WorkShop'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;