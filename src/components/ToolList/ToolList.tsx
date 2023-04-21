import styles from './ToolList.module.scss'

const tools = [
  {
    name: 'React',
    iconName: 'react',
  },
  {
    name: 'TypeScript',
    iconName: 'typescript',
  },
  {
    name: 'Redux',
    iconName: 'redux',
  },
  {
    name: 'React Query',
    iconName: 'react-query',
  },
  {
    name: 'Node.js',
    iconName: 'node',
  },
  {
    name: 'CSS',
    iconName: 'css3',
  },
  {
    name: 'Sass',
    iconName: 'sass',
  },
  {
    name: 'Tailwind',
    iconName: 'tailwind',
  },
  {
    name: 'MUI',
    iconName: 'mui',
  },
  {
    name: 'Framer Motion',
    iconName: 'framer-motion',
  },
  {
    name: 'Testing Library',
    iconName: 'rtl',
  },
  {
    name: 'Git',
    iconName: 'git',
  },
  {
    name: 'GitHub',
    iconName: 'github',
  },
]

const ToolList = () => {
  return (
    <div className={styles.toolList}>
      {tools.map((tool) => (
        <div className={styles.tool} key={tool.name}>
          <img src={`assets/tools/${tool.iconName}-logo.svg`} alt='' />
          <span>{tool.name}</span>
        </div>
      ))}
      <div className={[styles.tool, styles.more].join(' ')}>& More</div>
    </div>
  )
}

export default ToolList
