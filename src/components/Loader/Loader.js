import React from 'react'

import styles from './Loader.css'

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.bar1} />
    <div className={styles.bar2} />
    <div className={styles.bar3} />
  </div>
)

export default Loader
