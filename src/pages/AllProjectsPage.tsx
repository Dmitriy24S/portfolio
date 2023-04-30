import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Contact from '../components/Contact/Contact'

import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid'
import { ProjectType, allProjects } from '../data/allProjects'

const AllProjectsPage = () => {
  // const [data, setData] = useState<ProjectsDataType[]>(allProjects)
  const data: ProjectType[] = allProjects

  const links = [
    {
      to: '/portfolio',
      label: 'Home',
    },
    {
      to: '/portfolio/projects',
      label: 'Projects',
    },
  ]

  return (
    <>
      <Breadcrumbs links={links} />
      <ProjectsGrid data={data} />
      <Contact />
    </>
  )
}

export default AllProjectsPage
