import React from 'react'
import ReactMarkdown from 'react-markdown'

import Container from '../../Container/Container'
import content from './about_content'
import styles from './About.css'

const About = () => (
  <div className={styles.about}>
    <Container>
      <ReactMarkdown source={content} className="md" />
    </Container>
  </div>
)

export default About
