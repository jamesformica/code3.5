import React from 'react'

import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import BigLogo from './components/BigLogo/BigLogo'
import Contact from './components/Contact/Contact'
import Map from './components/Map/Map'
import Tagline from './components/Tagline/Tagline'
import Upcoming from './components/Upcoming/Upcoming'
import styles from './Home.css'

const Home = () => (
  <div className={styles.home}>
    <Tagline />
    <Contact />
    <BigLogo />
    <Upcoming />
    <ErrorBoundary>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCWHpsCOcbk0chzmrwBKwdf5YG-7DfIe_c&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '600px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </ErrorBoundary>
    <div className={styles.test} />
  </div>
)

export default Home
