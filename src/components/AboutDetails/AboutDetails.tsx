import SkillList from '../SkillList/SkillList'
import ToolList from '../ToolList/ToolList'

import sharedStyles from '../../shared/shared.module.scss'
import styles from './AboutDetails.module.scss'

const AboutDetails = () => {
  return (
    <section className={styles.container}>
      <h2 className={sharedStyles.title}>Skills & Experience</h2>
      <div className={styles.listContainer}>
        <SkillList />
        <ToolList />
      </div>
    </section>
  )
}

export default AboutDetails
