import { useEffect, useState } from 'react'
import { HiArrowNarrowUp } from 'react-icons/hi'
import { debounce } from '../../utils/debounce'

import styles from './SrollToTopButton.module.scss'

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const handleShowScrollToTopButton = debounce(() => {
    // console.log('window.pageYOffset', window.pageYOffset) // window.pageYOffset 1072
    if (window.pageYOffset > 0) {
      setShowScrollButton(true)
    } else {
      setShowScrollButton(false)
    }
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleShowScrollToTopButton)

    return () => window.removeEventListener('scroll', handleShowScrollToTopButton)
  }, [])

  return showScrollButton ? (
    <button
      aria-label='scroll to top'
      className={styles.scrollButton}
      onClick={handleScrollToTop}
    >
      <HiArrowNarrowUp />
    </button>
  ) : null
}

export default ScrollToTopButton
