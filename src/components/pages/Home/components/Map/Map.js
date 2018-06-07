import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'

import Logo from '../../../../Logo/Logo'
import styles from './Map.css'

const c = {
  lat: -37.615126,
  long: 145.126643
}

const options = {
  styles: [{
    featureType: 'poi.school',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'poi.business',
    stylers: [{ visibility: 'off' }]
  }]
}

const Map = withScriptjs(withGoogleMap(() => (
  <div className={styles.map}>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: c.lat, lng: c.long }}
      defaultOptions={options}
    >
      <MarkerWithLabel
        position={{ lat: c.lat, lng: c.long }}
        labelAnchor={new global.google.maps.Point(-20, 80)}
        labelStyle={{ fontSize: '0.5rem', padding: '0.5rem', width: '100px' }}
      >
        <Logo />
      </MarkerWithLabel>
    </GoogleMap>
  </div>
)))

export default Map

