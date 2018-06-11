import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import camelCase from 'lodash/camelCase'
import { Link } from 'react-router-dom'

import { fetchMarkdown } from '../../../helpers/markdownHelper'
import articles from './Articles'

class Article extends Component {
  constructor() {
    super()
    this.state = { article: null, notFound: false }
  }

  componentDidMount() {
    const articleName = this.props.match.params[0]
    const camelCaseName = camelCase(articleName)
    const url = articles[camelCaseName]

    fetchMarkdown(url).then((text) => {
      if (url && text.length > 0) {
        this.setState({ article: text })
      } else {
        this.setState({ notFound: true })
      }
    })
  }

  render = () => (
    <Fragment>
      {this.state.article &&
        <ReactMarkdown source={this.state.article} className="md" />
      }

      {this.state.notFound &&
        <Fragment>
          <h2>Sorry, the article you&apos;ve requested doesn&apos;t exist</h2>
          <p>
            You can <Link to="/learn" href="learn">browse all articles</Link> and
            hopefully you will find the one you are looking for!
          </p>
        </Fragment>
      }
    </Fragment>
  )
}

export default Article
