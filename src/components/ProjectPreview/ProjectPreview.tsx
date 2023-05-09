// import { useCallback, useState } from 'react'
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai'
import Tooltip from '../Tooltip/Tooltip'

import { ProjectType } from '../../data/allProjects'
import styles from './ProjectPreview.module.scss'

interface IProps {
  repo: ProjectType
}

const ProjectPreview = ({ repo }: IProps) => {
  const projectName = repo.name.split('-').join(' ')
  // const [isPreviewImgLoaded, setIsPreviewImgLoaded] = useState(false)

  // const onLoad = useCallback(() => {
  //   console.log('loaded')
  //   setIsPreviewImgLoaded(true)
  // }, [])

  return (
    <div className={styles.projectPreview}>
      <div className={styles.header}>
        {/* project name */}
        <a href={repo.homepage} target='_blank' tabIndex={-1}>
          <h4>{projectName}</h4>
        </a>
        {/* project links */}
        <div className={styles.links}>
          {repo.homepage && (
            // <div className={styles.eyeIcon}>
            //   {/* <a href={repo.homepage} title={`${projectName} Demo Page`} target='_blank'>
            //     <AiOutlineEye />
            //   </a>
            //   <Tooltip title='Demo Page' /> */}
            // {/* </div> */}
            <Tooltip title='Demo Page'>
              <a href={repo.homepage} title={`${projectName} Demo Page`} target='_blank'>
                <AiOutlineEye />
              </a>
            </Tooltip>
          )}
          <Tooltip title='Github Repo Page '>
            <a
              href={repo.html_url}
              title={`${projectName} Github Repo Page`}
              target='_blank'
            >
              <AiFillGithub />
            </a>
          </Tooltip>
        </div>
      </div>
      {/* description */}
      <p className={styles.desc}>{repo.description}</p>
      {/* project preview img */}
      <a href={repo.svn_url} className={styles.imageLink} target='_blank' tabIndex={-1}>
        <img
          alt='project design preview'
          loading='lazy'
          src={repo.img}
          width={200}
          height={200}
          className={styles.projectPreviewImage}
          // onLoad={onLoad}
          // style={{ display: isPreviewImgLoaded ? 'block' : 'none' }}
        />
        {/* {!isPreviewImgLoaded && <ProjectImageSkeleton />} */}
      </a>
    </div>
  )
}

export default ProjectPreview
