import css3 from '../../assets/tools/css3-logo.svg'
import framerMotion from '../../assets/tools/framer-motion-logo.svg'
import git from '../../assets/tools/git-logo.svg'
import github from '../../assets/tools/github-logo.svg'
import mui from '../../assets/tools/mui-logo.svg'
import node from '../../assets/tools/node-logo.svg'
import react from '../../assets/tools/react-logo.svg'
import reactQuery from '../../assets/tools/react-query-logo.svg'
import redux from '../../assets/tools/redux-logo.svg'
import rtl from '../../assets/tools/rtl-logo.svg'
import sass from '../../assets/tools/sass-logo.svg'
import tailwind from '../../assets/tools/tailwind-logo.svg'
import typescript from '../../assets/tools/typescript-logo.svg'

import styles from './ToolList.module.scss'

const tools = [
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'React Query',
    icon: reactQuery,
  },
  {
    name: 'Node.js',
    icon: node,
  },
  {
    name: 'CSS',
    icon: css3,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'MUI',
    icon: mui,
  },
  {
    name: 'Framer Motion',
    icon: framerMotion,
  },
  {
    name: 'Testing Library',
    icon: rtl,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'GitHub',
    icon: github,
  },
]

const ToolList = () => {
  return (
    <div className={styles.toolList}>
      {tools.map((tool) => (
        <div className={styles.tool} key={tool.name}>
          <img
            src={
              // `/assets/tools/${tool.iconName}-logo.svg`
              // `./assets/tools/${tool.iconName}-logo.svg`
              // `portfolio/assets/tools/${tool.iconName}-logo.svg`
              // `./src/assets/tools/${tool.iconName}-logo.svg`
              tool.icon
            }
            alt=''
          />
          <span>{tool.name}</span>
        </div>
      ))}
      <div className={[styles.tool, styles.more].join(' ')}>& More</div>
    </div>
  )
}

export default ToolList
