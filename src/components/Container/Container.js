import React from 'react'

import styles from './Container.css'

const Container = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>
    {children}
  </div>
)

export default Container
