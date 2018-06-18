import React, { Component } from 'react'

class OutsideClickHandler extends Component {
  componentDidMount() {
    document.addEventListener('click', this.onEvent, { capture: true })
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onEvent, { capture: true })
  }

  onEvent = (e) => {
    const { containerNode } = this
    const isInsideClick = containerNode && containerNode.contains(e.target)
    if (!isInsideClick) {
      this.props.onOutsideClick(e)
    }
  }

  setContainer = (ref) => { this.containerNode = ref }

  render = () => (
    <div className={this.props.className} ref={this.setContainer}>
      {this.props.children}
    </div>
  )
}

export default OutsideClickHandler
