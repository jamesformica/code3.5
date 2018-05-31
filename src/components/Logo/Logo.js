import React from 'react'

import styles from './Logo.css'

const Logo = () => (
  <div className={styles.logo}>
    <span className={styles.text}>code</span>
    <span className={styles.code}>
      <span className={styles.code_before}>3.5</span>
      <span className={styles.code_middle}>3.5</span>
      <span className={styles.code_after}>3.5</span>
    </span>
  </div>
)

export default Logo
