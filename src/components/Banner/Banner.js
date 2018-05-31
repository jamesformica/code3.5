import React from 'react'

import Logo from '../Logo/Logo'
import styles from './Banner.css'

const Banner = () => (
  <div className={styles.banner}>
    <h1 className={styles.title}>
      <span className={styles.small}>welcome to</span>
      <Logo />
    </h1>
  </div>
)

export default Banner
