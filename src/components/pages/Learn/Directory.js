import React, { Fragment } from 'react'
import keys from 'lodash/keys'
import kebabCase from 'lodash/kebabCase'
import lowerCase from 'lodash/lowerCase'

import { Link } from 'react-router-dom'

import articles from './Articles'

const Directory = ({ match }) => (
  <Fragment>
    {keys(articles).map((a) => {
      const kebab = kebabCase(a)
      const pretty = lowerCase(a)
      return <Link to={`${match.path}/${kebab}`} href="mooo">{pretty}</Link>
    })}
  </Fragment>
)

export default Directory
