import React, { Fragment } from 'react'

import styles from './ProjectDetails.css'

const ProjectDetails = ({ project }) => (
  <Fragment>
    <div className={styles.hero} style={{ backgroundImage: `url('${project.img}')` }}/>
    <h2>{project.name}</h2>
  </Fragment>
)

export default ProjectDetails
