import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import Container from '../../Container/Container'
import { fetchMarkdown } from '../../../helpers/markdownHelper'
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
      <ReactMarkdown source={this.state.about} className="md" />
    </Container>
  )
}

export default About
