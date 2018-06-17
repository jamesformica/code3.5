import React from 'react'

import styles from './Upcoming.css'
import calendar from './calendar.svg'

const Upcoming = () => (
  <div className={styles.upcoming}>
    <img src={calendar} className={styles.icon} alt="Calendar Icon" />
    <div className={styles.info}>
      <b>WHEN</b>
      <p>TBC</p>
      <b>TIME</b>
      <p>TBC</p>
      <b>COST</b>
      <p>$5.00 per session</p>
      <b>WHERE</b>
      <p>Code3.5 is run out of the
        <span className={styles.loc}> Orchard Road Community Centre </span>
        in Doreen, VIC 3754
      </p>
    </div>
  </div>
)

export default Upcoming
