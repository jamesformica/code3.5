import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Banner from '../../Banner/Banner'
import Navigation from '../../Navigation/Navigation'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Projects/Projects'

const Base = () => (
  <Router>
    <Fragment>
      <Banner />
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Fragment>
  </Router>
)

export default Base
