import React from 'react'
import { Link as RLink } from 'react-router-dom'

import styles from './Link.css'

const Link = props => (
  <RLink className={styles.link} {...props} />
)

export const Anchor = props => (
  <a className={styles.link} {...props}>{props.children}</a>
)

export default Link
