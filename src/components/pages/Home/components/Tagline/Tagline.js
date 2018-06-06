import React from 'react'

import Container from '../../../../Container/Container'
import styles from './Tagline.css'

const Tagline = () => (
  <Container className={styles.tagline}>
    <h2 className={styles.tag}>
      Putting the &quot;fun&quot;
      <br />
      back into&nbsp;
      <span className={styles.fun}>fun</span>
      ky websites!
    </h2>
    <p className={styles.quote}>
      Helping kids create their own website in a fun and interactive class
    </p>
  </Container>
)

export default Tagline
