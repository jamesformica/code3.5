import React from 'react'

import styles from './Upcoming.css'
import calendar from './calendar.svg'

// const Event = () => (
//   <div>

//   </div>
// )

const Upcoming = () => (
  <div className={styles.upcoming}>
    <img src={calendar} alt="Calendar Icon" />
    <div>
      <h2>Upcoming events:</h2>
      <p><b>When:</b> [Date]</p>
      <p><b>Where:</b> [Time]</p>
    </div>
  </div>
)

export default Upcoming
