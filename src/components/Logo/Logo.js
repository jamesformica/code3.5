import React from 'react'

import styles from './Logo.css'

const Logo = () => (
  <div className={styles.logo}>
    <span className={styles.tertiary} aria-hidden>3.5</span>
    <span className={styles.secondary} aria-hidden>3.5</span>
    <span className={styles.primary} aria-hidden>3.5</span>
    <span className={styles.base}>3.5</span>
  </div>
)

export default Logo
