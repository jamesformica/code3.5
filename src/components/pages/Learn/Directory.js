import React from 'react'
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
  <div className="md">
    <h1>Code3.5 self learning materials</h1>
    <p>
      The following articles contain tutorials, guides,
      hints and tips to help you become a great coder!
    </p>
    <ul className={styles.list}>
      {keys(articles).map(a => buildLink(match.path, a))}
    </ul>
  </div>
)

export default Directory
