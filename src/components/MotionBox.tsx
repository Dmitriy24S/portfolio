import { AnimationControls, motion, MotionProps, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface IMotionWrapper extends MotionProps {
  children: React.ReactNode
  controls?: AnimationControls
}

const MotionBox = ({ variants, children }: IMotionWrapper) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} animate={controls} variants={variants} initial='hidden'>
      {children}
    </motion.div>
  )
}

export default MotionBox
