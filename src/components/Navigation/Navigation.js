import React from 'react'
import Sticky from 'react-stickynode'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import Logo from '../Logo/Logo'
import styles from './Navigation.css'

const routes = [
  { to: '/', display: 'Home' },
  { to: '/projects', display: 'Projects' },
  { to: '/learn', display: 'Learn' },
  { to: '/about', display: 'About' },
]

const isActive = (location, to) => {
  const path = `/${location.pathname.split('/')[1]}`
  return path === to
}

const getLinkClass = (location, to) => (
  isActive(location, to) ? styles.linkActive : styles.link
)

const NavLink = ({ location, route }) => {
  const className = getLinkClass(location, route.to)
  return (
    <Link className={className} to={route.to} href="shutting-up-eslint">
      {route.display}
    </Link>
  )
}

const Navigation = ({ location }) => (
  <Sticky innerZ={100}>
    <div className={styles.wrapper}>
      <Logo />
      <nav className={styles.nav}>
        {routes.map(r => <NavLink location={location} route={r} key={r.to} />)}
      </nav>
    </div>
  </Sticky>
)

export default withRouter(Navigation)
