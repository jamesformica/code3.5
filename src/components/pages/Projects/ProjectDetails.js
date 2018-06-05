import React from 'react'

import Container from '../../Container/Container'
import styles from './ProjectDetails.css'

const ProjectDetails = ({ project }) => (
  <Container>
    <div className={styles.hero} style={{ backgroundImage: `url('${project.img}')` }} />
    <div className={styles.content}>
      <h2>{project.name}</h2>
      <span role="img" aria-label="">
        👉&nbsp;
        <a href={project.url} target="_blank">Check out the website</a>
        &nbsp;👈
      </span>

      <p>{project.description}</p>
    </div>
  </Container>
)

export default ProjectDetails