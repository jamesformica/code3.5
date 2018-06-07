import React, { Component, Fragment } from 'react'
import FlipMove from 'react-flip-move'

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

  Overlay = () => (
    <div
      tabIndex="0"
      role="button"
      className={styles.overlay}
      onClick={this.clearSelected}
      onKeyDown={this.clearSelected}
    />
  )

  render = () => (
    <Fragment>
      {this.state.selected && <this.Overlay />}

      <FlipMove className={styles.wrapper} duration={400} staggerDurationBy={100}>
        {this.state.projects.map((p) => {
          const isOpen = p.id === this.state.selected

          return isOpen ?
            (
              <div className={styles.fixed} key={`${p.id}-selected`}>
                <button className={styles.close} onClick={this.clearSelected}>close</button>
                <ProjectDetails project={p} />
              </div>
            ) : (
              <div
                key={p.id}
                role="button"
                tabIndex="0"
                className={styles.project}
                style={{ backgroundImage: `url('${p.img}')` }}
                onClick={() => this.setSelected(p.id)}
                onKeyDown={() => this.setSelected(p.id)}
              >
                <span className={styles.name}>{p.name}</span>
              </div>
            )
        })}
      </FlipMove>
    </Fragment>
  )
}

export default Projects
