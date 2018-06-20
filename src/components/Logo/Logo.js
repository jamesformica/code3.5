import React from 'react'

import styles from './Logo.css'

const offset = 0.08

const getOffset = (fontSize, multiple) => ({
  top: fontSize * -offset * multiple,
  left: fontSize * offset * multiple
})

const Logo = ({ fontSize }) => (
  <div className={styles.logo} style={{ fontSize: `${fontSize}px` }}>
    <span className={styles.tertiary} style={getOffset(fontSize, 3)} aria-hidden>3.5</span>
    <span className={styles.secondary} style={getOffset(fontSize, 2)} aria-hidden>3.5</span>
    <span className={styles.primary} style={getOffset(fontSize, 1)} aria-hidden>3.5</span>
    <span className={styles.base}>3.5</span>
  </div>
)

export default Logo
