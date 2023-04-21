import styles from './SkillList.module.scss'

const SkillList = () => {
  return (
    <ul className={styles.list}>
      <li>
        Frontend Web Development <span>2021</span>
      </li>
      <li>JavaScript, TypeScript, React and Next.js.</li>
      <li>Node.js, REST API and Git.</li>
      <li>
        Libraries: Redux Toolkit, Axios, React Router, React Query, React Testing Library,
        Formik, React Hook Form, yup, zod
        <span> & more.</span>
      </li>
      <li>
        CSS, SASS, Tailwind & UI Libraries <span>(MUI, Framer Motion, & more)</span>
      </li>
      <li>In progress: Learning Backend and expanding Frontend knowledge. </li>
    </ul>
  )
}

export default SkillList
