import ProjectPreview from '../ProjectPreview/ProjectPreview'

import { ProjectType } from '../../data/allProjects'
import sharedStyles from '../../shared/shared.module.scss'
import styles from './ProjectsGrid.module.scss'

interface IProps {
  data: ProjectType[]
}

const ProjectsGrid: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <h2 id='projects' className={sharedStyles.title}>
        All Projects
      </h2>
      <div className={styles.grid}>
        {data.map((project) => (
          <ProjectPreview repo={project} key={project.id} />
        ))}
      </div>
    </>
  )
}

export default ProjectsGrid
