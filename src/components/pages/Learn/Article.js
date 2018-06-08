import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import camelCase from 'camelcase'

import articles from './Articles'

class Article extends Component {
  constructor() {
    super()
    this.state = { article: null }
  }

  componentDidMount() {
    const articleName = this.props.match.params[0]
    const camelCaseName = camelCase(articleName)

    fetch(articles[camelCaseName]).then(response => (
      response.text()
    )).then(text => (
      this.setState({ article: text })
    ))
  }

  render = () => (
    <ReactMarkdown source={this.state.article} className="md" />
  )
}

export default Article
