import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    console.log('ScrollToTop, pathname:', pathname)
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
