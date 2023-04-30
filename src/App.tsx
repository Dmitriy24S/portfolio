import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

// import AllProjectsPage from './pages/AllProjectsPage'
// import HomePage from './pages/HomePage'
const AllProjectsPage = React.lazy(
  () => import(/* webpackChunkName: "AllProjectsPage" */ './pages/AllProjectsPage')
)
const HomePage = React.lazy(
  () => import(/* webpackChunkName: HomePage*/ './pages/HomePage')
)

function App() {
  return (
    <div className='App'>
      {/* <BrowserRouter basename='/portfolio'> */}
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <ScrollToTopButton />
        <Routes>
          <Route path='/' element={<Navigate to='/portfolio' />} />
          <Route
            path='/portfolio'
            element={
              <Suspense>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='/portfolio/projects'
            element={
              <Suspense>
                <AllProjectsPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
