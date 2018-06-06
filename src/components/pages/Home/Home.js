import React from 'react'

import Tagline from './components/Tagline/Tagline'
import Upcoming from './components/Upcoming/Upcoming'
import styles from './Home.css'

const Home = () => (
  <div className={styles.home}>
    <Tagline />
    <Upcoming />
    <div className={styles.test} />
  </div>
)

export default Home
