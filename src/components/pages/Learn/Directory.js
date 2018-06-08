import React, { Fragment } from 'react'
import keys from 'lodash/keys'
import decamelize from 'decamelize'
import { Link } from 'react-router-dom'

import articles from './Articles'

const Directory = ({ match }) => (
  <Fragment>
    {keys(articles).map((a) => {
      const decamel = decamelize(a, '-')
      const pretty = decamelize(a, ' ')
      return <Link to={`${match.path}/${decamel}`} href="mooo">{pretty}</Link>
    })}
  </Fragment>
)

export default Directory
