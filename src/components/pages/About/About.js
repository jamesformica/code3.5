import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import { fetchMarkdown } from '../../../helpers/markdownHelper'
import Container from '../../Container/Container'
import Loader from '../../Loader/Loader'
import url from './About.md'
import styles from './About.css'

class About extends Component {
  constructor() {
    super()
    this.state = { about: null }
  }

  componentDidMount() {
    fetchMarkdown(url).then(text => (
      this.setState({ about: text })
    ))
  }

  render = () => (
    <Container className={styles.about}>
      {this.state.about
        ? <ReactMarkdown source={this.state.about} className="md" />
        : <Loader />
      }
    </Container>
  )
}

export default About
