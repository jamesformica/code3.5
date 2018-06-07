import React from 'react'

import BigLogo from './components/BigLogo/BigLogo'
import Contact from './components/Contact/Contact'
import Tagline from './components/Tagline/Tagline'
import Upcoming from './components/Upcoming/Upcoming'
import styles from './Home.css'

const Home = () => (
  <div className={styles.home}>
    <Tagline />
    <Contact />
    <BigLogo />
    <Upcoming />
    <div className={styles.test} />
  </div>
)

export default Home
