import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
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
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTopButton />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
