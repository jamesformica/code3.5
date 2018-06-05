import React from 'react'
import Sticky from 'react-stickynode'
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

const NavLink = ({ location, route }) => (
  <Link
    to={route.to}
    href="shutting-up-eslint"
    className={linkClass(location, route.to)}
  >
    {route.display}
  </Link>
)

const Navigation = ({ location }) => (
  <Sticky innerZ={100}>
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        {routes.map(r => <NavLink location={location} route={r} key={r.to} />)}
      </div>
    </nav>
  </Sticky>
)

export default withRouter(Navigation)
