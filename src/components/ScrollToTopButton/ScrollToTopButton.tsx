import { useEffect, useState } from 'react'
import { HiArrowNarrowUp } from 'react-icons/hi'
import { debounce } from '../../utils/debounce'

import styles from './SrollToTopButton.module.scss'

const ScrollToTopButton = () => {
  // console.count('ScrollToTopButton')

  const [showScrollButton, setShowScrollButton] = useState(false)
  const [hideButton, setHideButton] = useState(false)

  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    let timer: number

    const handleShowScrollToTopButton = debounce(() => {
      // console.log('window.pageYOffset', window.pageYOffset) // window.pageYOffset 1072
      if (window.pageYOffset > 0) {
        setShowScrollButton(true)
        clearTimeout(timer)
        setHideButton(false)
      } else {
        setHideButton(true)
        timer = setTimeout(() => {
          setShowScrollButton(false)
          // }, 125) // after css fadeOut 125ms animation hide button // ! flash in out fadeout?
        }, 115)
      }
    }, 100)

    window.addEventListener('scroll', handleShowScrollToTopButton)

    return () => {
      window.removeEventListener('scroll', handleShowScrollToTopButton)
      clearTimeout(timer)
    }
  }, [])

  return showScrollButton ? (
    <button
      aria-label='scroll to top'
      onClick={handleScrollToTop}
      className={[styles.scrollButton, hideButton ? styles.fadeOut : ''].join(' ')}
    >
      <HiArrowNarrowUp />
    </button>
  ) : null
}

export default ScrollToTopButton
