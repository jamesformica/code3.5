import React from 'react'
import Sticky from 'react-stickynode';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import styles from './Navigation.css'

const routes = [
  { to: '/', display: 'Home' },
  { to: '/projects', display: 'Projects' },
  { to: '/learn', display: 'Learn' },
  { to: '/about', display: 'About' },
]

const linkClass = (location, to) => {
  const path = `/${location.pathname.split('/')[1]}`
  return path === to ? styles.linkActive : styles.link
}

const Navigation = ({ location }) => (
  <Sticky>
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        {routes.map(r =>
          <Link className={linkClass(location, r.to)} to={r.to} key={r.display}>
            {r.display}
          </Link>
        )}
      </div>
    </nav>
  </Sticky>
)

export default withRouter(Navigation)
