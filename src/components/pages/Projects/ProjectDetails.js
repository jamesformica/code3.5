import React from 'react'

import { Anchor } from '../../Link/Link'
import OutsideClickHandler from '../../OutsideClickHandler/OutsideClickHandler'
import Container from '../../Container/Container'
import styles from './ProjectDetails.css'

const ProjectDetails = ({ project, onClose }) => (
  <OutsideClickHandler className={styles.details} onOutsideClick={onClose}>
    <button className={styles.close} onClick={onClose}>x</button>

    <Container>
      <div className={styles.hero} style={{ backgroundImage: `url('${project.img}')` }} />
      <div className={styles.content}>
        <h2 className={styles.title}>{project.name}</h2>
        <p>{project.description}</p>

        <div className={styles.buttons}>
          <Anchor className={styles.primary} href={project.url} target="_blank">
            Check out the website
          </Anchor>

          <Anchor className={styles.secondary} href={project.repo} target="_blank">
            Look at the code
          </Anchor>
        </div>
      </div>
    </Container>
  </OutsideClickHandler>
)

export default ProjectDetails
