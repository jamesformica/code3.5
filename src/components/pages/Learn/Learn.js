import React from 'react'
import { Route } from 'react-router-dom'

import Container from '../../Container/Container'
import Directory from './Directory'
import Article from './Article'
import styles from './Learn.css'

const Learn = ({ match }) => (
  <Container className={styles.learn}>
    <Route exact path={match.path} component={Directory} />
    <Route path={`${match.path}/*`} component={Article} />
  </Container>
)

export default Learn
