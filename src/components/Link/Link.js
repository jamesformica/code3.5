import React from 'react'
import { Link as RLink } from 'react-router-dom'

import styles from './Link.css'

const Link = ({ className, ...rest }) => (
  <RLink className={`${styles.link} ${className}`} {...rest} />
)

export const Anchor = props => (
  <a className={styles.link} {...props}>{props.children}</a>
)

export default Link
