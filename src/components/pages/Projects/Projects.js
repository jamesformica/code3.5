import React, { Component, Fragment } from 'react'
import FlipMove from 'react-flip-move'

import ProjectDetails from './ProjectDetails'
import projects from '../../../_projects'
import styles from './Projects.css'

const ProjectCards = ({ projects: pros, isSelected, onClick }) => (
  <div className={styles.wrapper}>
    {pros.map(p => (
      <button
        key={p.id}
        className={isSelected ? styles.bgProject : styles.project}
        style={{ backgroundImage: `url('${p.img}')` }}
        onClick={() => onClick(p.id)}
      >
        <span className={styles.name}>{p.name}</span>
      </button>
    ))}
  </div>
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
        {isSelected && <div className={styles.overlay} />}

        <ProjectCards
          projects={this.state.projects}
          isSelected={isSelected}
          onClick={this.setSelected}
        />

        <FlipMove duration={400} staggerDurationBy={100}>
          {isSelected &&
            <div className={styles.grande}>
              <ProjectDetails key="selected" project={this.state.selected} onClose={this.clearSelected} />
            </div>
          }
        </FlipMove>
      </Fragment >
    )
  }
}

export default Projects
