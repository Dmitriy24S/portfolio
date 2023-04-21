import { useState } from 'react'
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai'
import ProjectImageSkeleton from '../Skeleton/ProjectImageSkeleton'
import Tooltip, { Tooltip2 } from '../Tooltip/Tooltip'
import { IRepo } from '../TopProjects/TopProjects'

import styles from './ProjectPreview.module.scss'

interface IProps {
  repo: IRepo
}

const ProjectPreview = ({ repo }: IProps) => {
  const projectName = repo.name.split('-').join(' ')
  const [isPreviewImgLoaded, setIsPreviewImgLoaded] = useState(false)

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
            <div className={styles.eyeIcon}>
              <a href={repo.homepage} title={`${projectName} Demo Page`} target='_blank'>
                <AiOutlineEye />
              </a>
              <Tooltip title='Demo Page' />
              {/* <Tooltip2 title='Demo Page'>
                <a
                  href={repo.homepage}
                  title={`${projectName} Demo Page`}
                  target='_blank'
                >
                  <AiOutlineEye />
                </a>
              </Tooltip2> */}
            </div>
          )}
          <div className={styles.webIcon}>
            <a href={repo.svn_url} title={`${projectName} Github Page`} target='_blank'>
              <AiFillGithub />
            </a>
            <Tooltip title='Github Repo Page' />
          </div>
        </div>
      </div>
      {/* description */}
      <p className={styles.desc}>{repo.description}</p>
      {/* project preview img */}
      <a href={repo.svn_url} className={styles.imageLink} target='_blank' tabIndex={-1}>
        {!isPreviewImgLoaded && <ProjectImageSkeleton />}
        <img
          onLoad={() => setIsPreviewImgLoaded(true)}
          src={repo.img}
          alt='project design preview'
          className={styles.projectPreviewImage}
          style={{ display: isPreviewImgLoaded ? 'block' : 'none' }}
          // loading='lazy'
        />
      </a>
    </div>
  )
}

export default ProjectPreview
