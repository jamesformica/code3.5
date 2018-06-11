import React, { Fragment } from 'react'
import kebabCase from 'lodash/kebabCase'
import keys from 'lodash/keys'
import lowerCase from 'lodash/lowerCase'

import Link from '../../Link/Link'
import articles from './Articles'
import styles from './Learn.css'

const buildLink = (path, article) => {
  const kebab = kebabCase(article)
  const pretty = lowerCase(article)

  return (
    <li key={kebab} className={styles.li}>
      <Link to={`${path}/${kebab}`} href="mooo">{pretty}</Link>
    </li>
  )
}

const Directory = ({ match }) => (
  <Fragment>
    <h2>Code3.5 learning marterials</h2>
    <ul className={styles.list}>
      {keys(articles).map(a => buildLink(match.path, a))}
    </ul>
  </Fragment>
)

export default Directory
