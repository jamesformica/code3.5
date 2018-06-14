import React, { Component, Fragment } from 'react'
import FlipMove from 'react-flip-move'

import ProjectDetails from './ProjectDetails'
import projects from '../../../_projects'
import styles from './Projects.css'

const Overlay = ({ isOpen, clearSelected }) => (
  isOpen ? (
    <div
      tabIndex="0"
      role="button"
      className={styles.overlay}
      onClick={clearSelected}
      onKeyDown={clearSelected}
    />
  ) : null
)

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects,
      selected: null
    }
  }

  setSelected = (key) => {
    const project = this.state.projects.find(p => p.id === key)
    this.setState({ selected: project })
  }

  clearSelected = () => this.setState({ selected: null })

  render() {
    const { selected } = this.state
    const isSelected = !!selected

    return (
      <Fragment>
        <Overlay isOpen={isSelected} clearSelected={this.clearSelected} />

        <div className={styles.wrapper}>
          {this.state.projects.map(p => (
            <button
              key={p.id}
              className={styles.project}
              style={{ backgroundImage: `url('${p.img}')` }}
              onClick={() => this.setSelected(p.id)}
            >
              <span className={styles.name}>{p.name}</span>
            </button>
          ))}
        </div>

        <FlipMove duration={400} staggerDurationBy={100}>
          {isSelected &&
            <div className={styles.grande}>
              <ProjectDetails key="selected" project={this.state.selected} onClose={this.clearSelected} />
            </div>
          }
        </FlipMove>
      </Fragment>
    )
  }
}

export default Projects
