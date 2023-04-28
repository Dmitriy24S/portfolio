import AboutDetails from '../components/AboutDetails/AboutDetails'
import AboutIntro from '../components/AboutIntro/AboutIntro'
import Contact from '../components/Contact/Contact'
import MotionBox from '../components/MotionBox'
import TopProjects from '../components/TopProjects/TopProjects'
import useMotionVariants from '../hooks/useMotionVariants'

const HomePage = () => {
  const { slideUpVariants } = useMotionVariants('up')

  return (
    <>
      <AboutIntro />
      <AboutDetails />
      <TopProjects />
      <MotionBox variants={slideUpVariants}>
        <Contact />
      </MotionBox>
    </>
  )
}

export default HomePage
