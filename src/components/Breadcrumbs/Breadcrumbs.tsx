import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Breadcrumbs.module.scss'

interface ILink {
  to: string
  label: string
}

interface IProps {
  links: ILink[]
}

const Breadcrumbs: React.FC<IProps> = ({ links }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          end
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Breadcrumbs
