import React, { Fragment } from 'react'

import Container from '../../Container/Container'
import styles from './Home.css'

const Home = () => (
  <Fragment>
    <Container>
      <h2>
        Putting the &apos;fun&apos;
      <br />
        back in funky websites!
      </h2>
    </Container>
    <div className={styles.test} />
  </Fragment>
)

export default Home
