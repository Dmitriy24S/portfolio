import { TbExternalLink } from 'react-icons/tb'
import styles from './AboutIntro.module.scss'

const AboutIntro = () => {
  return (
    <section className={styles.container}>
      {/* Name */}
      <div className={styles.nameOuter}>
        <div className={styles.nameInner}>
          <h1 className={styles.name}>Dmitri Sirjajev</h1>
          <p>Web Developer</p>
          <a
            className={styles.githubLink}
            href='https://github.com/Dmitriy24S'
            target='_blank'
            rel='noopener'
          >
            GitHub
            <TbExternalLink />
          </a>
        </div>
      </div>
      {/* Details */}
      <div className={styles.details}>
        <p>
          Front end development specialist, who strives to provide the best possible user
          experience in the applications they build, regardless of browser or screen size.
        </p>
        <p>
          Approaches each project with enthusiasm and a positive can-do attitude while
          delivering high-quality results.
        </p>
      </div>
    </section>
  )
}

export default AboutIntro
