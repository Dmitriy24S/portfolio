import { useEffect } from 'react'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import AllProjectsPage from './pages/AllProjectsPage'
import HomePage from './pages/HomePage'

function App() {
  const fetchGithubInfo = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/Dmitriy24S`)
      // ! "API rate limit exceeded for 82.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
      const data = await response.json()
      console.log('fetchGithubInfo data', data)
    } catch (error) {
      console.log('fetchGithubInfo error:', error)
      alert('fetchGithubInfo error')
    }
  }

  useEffect(() => {
    // fetchGithubInfo()
    // const data = fetch('https://api.github.com/repos/Dmitriy24S/REPO')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path='/' element={<Navigate to='/portfolio' />} />
          <Route path='/portfolio' element={<HomePage />} />
          <Route path='/portfolio/projects' element={<AllProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
