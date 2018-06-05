import React, { Component } from 'react'
import FlipMove from 'react-flip-move';

import ProjectDetails from './ProjectDetails'
import projects from '../../../_projects'
import styles from './Projects.css'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects,
      selected: null
    }
  }

  setSelected = (key) => {
    this.setState({ selected: key })
  }

  clearSelected = () => this.setState({ selected: null })

  render = () => (
    <FlipMove className={styles.wrapper} duration={800} staggerDurationBy={100}>
      {this.state.projects.map((p) => p.id === this.state.selected ?
        (
          <div className={styles.fixed} key={`${p.id}-selected`}>
            <button className={styles.close} onClick={this.clearSelected}>close</button>
            <ProjectDetails project={p} />
          </div>
        ) : (
          <div
            key={p.id}
            className={styles.project}
            style={{ backgroundImage: `url('${p.img}')` }}
            onClick={() => this.setSelected(p.id)}
          >
            <span className={styles.name}>{p.name}</span>
          </div>
        )
      )}
    </FlipMove >
  )
}

export default Projects