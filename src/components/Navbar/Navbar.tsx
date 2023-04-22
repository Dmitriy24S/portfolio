import { AiFillHome, AiOutlineDownload } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

const Navbar = () => (
  <header>
    <div className={styles.headerContent}>
      {/* HOME */}
      <Link
        to='/portfolio'
        className={styles.homeLink}
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <AiFillHome />
      </Link>
      {/* NAV LINKS */}
      <div className={styles.links}>
        <a
          href='CV-Dmitri-Sirjajev.pdf'
          target='_blank'
          className={styles.downloadButton}
        >
          CV
          <AiOutlineDownload />
        </a>
        {/* <Link to='/all-projects'>All Projects</Link> */}
        <a href='#project'>Projects</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  </header>
)

export default Navbar
