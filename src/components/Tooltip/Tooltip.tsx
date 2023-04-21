import styles from './Tooltip.module.scss'

interface IProps {
  children?: React.ReactNode
  title: string
  active?: boolean
}

export const Tooltip2 = ({ children, title, active }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={[styles.tooltip, active && styles.active].join(' ')}>{title}</div>
      {children}
    </div>
  )
}

const Tooltip = ({ children, title, active }: IProps) => {
  return (
    <div className={[styles.tooltip, active && styles.active].join(' ')}>{title}</div>
  )
}

export default Tooltip
