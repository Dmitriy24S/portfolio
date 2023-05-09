import { Link } from 'react-router-dom'
import { topRepos } from '../../data/data'
import ProjectPreview from '../ProjectPreview/ProjectPreview'

import { ProjectType } from '../../data/allProjects'
import sharedStyles from '../../shared/shared.module.scss'
import styles from './TopProjects.module.scss'

const TopProjects = () => {
  const reposData: ProjectType[] = topRepos

  return (
    <section className={styles.TopProjects}>
      <div className={styles.TopProjectsHeader}>
        <h2 id='projects' className={sharedStyles.title}>
          Projects
        </h2>
        {/* <Link to='https://github.com/Dmitriy24S' target='_blank'> */}
        <Link to='/portfolio/projects' className={styles.projectsLink}>
          View All Projects
        </Link>
      </div>
      <div className={styles.TopProjectsContainer}>
        {reposData.map((repo) => (
          <ProjectPreview repo={repo} key={repo.name} />
        ))}
      </div>
      <div className={styles.TopProjectsFooter}>
        <Link to='/portfolio/projects' className={styles.projectsLink}>
          View All Projects
        </Link>
      </div>
    </section>
  )
}

export default TopProjects
