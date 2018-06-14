import React from 'react'
import { Link as RLink } from 'react-router-dom'

import styles from './Link.css'

const Link = ({ className, ...rest }) => (
  <RLink className={`${styles.link} ${className}`} {...rest} />
)

export const Anchor = ({ className, children, ...rest }) => (
  <a className={`${styles.link} ${className}`} {...rest}>{children}</a>
)

export default Link
