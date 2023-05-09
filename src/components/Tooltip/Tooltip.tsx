import { useEffect, useState } from 'react'
import styles from './Tooltip.module.scss'

interface IProps {
  children?: React.ReactNode
  title: string
  active?: boolean // contact copied status trigger tooltip
}

export const Tooltip = ({ children, title, active }: IProps) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleFocus = () => setShowTooltip(true)
  const handleBlur = () => setShowTooltip(false)

  // after active is true, show tooltip for 2 seconds. i.e. click on copy email button - reset focus
  useEffect(() => {
    let timeoutId: number
    if (active) {
      timeoutId = setTimeout(() => {
        setShowTooltip(false)
      }, 2000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [active])

  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseLeave={handleBlur}
      className={styles.container}
    >
      <div
        className={[styles.tooltip, (showTooltip || active) && styles.active].join(' ')}
      >
        {title}
      </div>
      {children}
    </div>
  )
}

// const Tooltip = ({ children, title, active }: IProps) => {
//   return (
//     <div className={[styles.tooltip, active && styles.active].join(' ')}>{title}</div>
//   )
// }

export default Tooltip
