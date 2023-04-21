import { Link } from 'react-router-dom'
import { topRepos } from '../../data/data'
import ProjectPreview from '../ProjectPreview/ProjectPreview'

import sharedStyles from '../../shared/shared.module.scss'
import styles from './TopProjects.module.scss'

export type IRepo = (typeof topRepos)[0]

const TopProjects = () => {
  const reposData: IRepo[] = topRepos

  return (
    <section className={styles.TopProjects}>
      <div className={styles.TopProjectsHeader}>
        <h2 id='project' className={sharedStyles.title}>
          Projects
        </h2>
        <Link to='https://github.com/Dmitriy24S' target='_blank'>
          View All Projects
        </Link>
      </div>
      <div className={styles.TopProjectsContainer}>
        {reposData.map((repo) => (
          <ProjectPreview repo={repo} key={repo.name} />
        ))}
      </div>
    </section>
  )
}

export default TopProjects
