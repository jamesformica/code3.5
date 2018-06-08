import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from '../../Navigation/Navigation'
import Footer from '../../Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Learn from '../Learn/Learn'
import Projects from '../Projects/Projects'
import styles from './Base.css'

const Base = () => (
  <Router>
    <div className={styles.base}>
      <Navigation />

      <div className={styles.content}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/learn" component={Learn} />
        <Route path="/projects" component={Projects} />
      </div>

      <Footer />
    </div>
  </Router>
)

export default Base
