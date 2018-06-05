import React from 'react'
import ReactMarkdown from 'react-markdown'

import Container from '../../Container/Container'
import content from './about_content'

const About = () => (
  <Container>
    <ReactMarkdown source={content} className="md" />
  </Container>
)

export default About
