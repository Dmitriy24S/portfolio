import { useReducedMotion } from 'framer-motion'

const useMotionVariants = (motionType: 'up') => {
  const shouldReduceMotion = useReducedMotion()
  let slideUpVariants

  if (motionType === 'up') {
    const slideUpMotionState = {
      opacity: shouldReduceMotion ? 1 : 0,
      transform: shouldReduceMotion ? 'translateY(0px)' : 'translateY(200px)',
      scale: shouldReduceMotion ? 1 : 0,
    }

    slideUpVariants = {
      visible: {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0px)',
        transition: { duration: 0.2 },
      },
      hidden: {
        opacity: slideUpMotionState.opacity,
        scale: slideUpMotionState.scale,
        transform: slideUpMotionState.transform,
      },
    }
  }

  return { slideUpVariants }
}

export default useMotionVariants
